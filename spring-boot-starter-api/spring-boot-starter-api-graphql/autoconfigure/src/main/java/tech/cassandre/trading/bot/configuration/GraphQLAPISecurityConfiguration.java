package tech.cassandre.trading.bot.configuration;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;

import static org.springframework.security.config.http.SessionCreationPolicy.STATELESS;

/**
 * GraphQL API security configuration.
 */
@SuppressWarnings("DesignForExtension")
@Configuration
public class GraphQLAPISecurityConfiguration {

    /**
     * API Key.
     */
    @Value("${cassandre.trading.bot.api.graphql.key:}")
    private String key;

    @Bean
    @Order(Ordered.HIGHEST_PRECEDENCE + 1)
    public SecurityFilterChain securityFilterChain(final HttpSecurity http) throws Exception {
        if (key == null || key.isBlank()) {
            // if key is not set, no security at all. Everything is accessible.
            http
                    .securityMatcher("/graphql/**")
                    .csrf(AbstractHttpConfigurer::disable)
                    .sessionManagement(session -> session.sessionCreationPolicy(STATELESS))
                    .authorizeHttpRequests(auth -> auth.anyRequest().permitAll());
        } else {
            // If a key is set, we ask for key on every request (X-API-Key header).
            GraphQLAPIKeyAuthenticationFilter filter = new GraphQLAPIKeyAuthenticationFilter();
            filter.setAuthenticationManager(new GraphQLAPIKeyAuthenticationManager(key));
            http
                    .securityMatcher("/graphql/**")
                    .csrf(AbstractHttpConfigurer::disable)
                    .sessionManagement(session -> session.sessionCreationPolicy(STATELESS))
                    .addFilter(filter)
                    .authorizeHttpRequests(auth -> auth.anyRequest().authenticated());
        }
        return http.build();
    }
}
