import{_ as a,r as n,o as s,c as i,b as e,d as t,a as r,e as d}from"./app-bb6d68d1.js";const c={},u=d(`<h1 id="importer-des-donnees-historiques" tabindex="-1"><a class="header-anchor" href="#importer-des-donnees-historiques" aria-hidden="true">#</a> Importer des données historiques</h1><h2 id="presentation" tabindex="-1"><a class="header-anchor" href="#presentation" aria-hidden="true">#</a> Présentation</h2><p>Cette fonctionnalité vous permet d&#39;importer des données historiques au démarrage de votre bot et de les utiliser pour initialiser votre stratégie.</p><h2 id="donnees-format" tabindex="-1"><a class="header-anchor" href="#donnees-format" aria-hidden="true">#</a> Données &amp; format</h2><p>Au démarrage, Cassandre va chercher des fichiers commençant par <code>candles-to-import-</code> et finissant par <code>csv</code>.</p><p>Voici comment vos données doivent être formatées :</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;TIMESTAMP&quot;, &quot;OPEN&quot;, &quot;CLOSE&quot;, &quot;HIGH&quot;, &quot;LOW&quot;, &quot;VOLUME&quot;, &quot;QUOTE_VOLUME&quot;, &quot;CURRENCY_PAIR&quot;
&quot;1640044800&quot;,&quot;46898.1&quot;,&quot;48891.4&quot;,&quot;49322&quot;,&quot;46655.6&quot;,&quot;7389.39809406&quot;,&quot;357318509.007992951&quot;,&quot;BTC-USDT&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="quand-pouvez-vous-initialiser-vos-donnees" tabindex="-1"><a class="header-anchor" href="#quand-pouvez-vous-initialiser-vos-donnees" aria-hidden="true">#</a> Quand pouvez-vous initialiser vos données ?</h2>`,8),l={href:"https://www.javadoc.io/doc/tech.cassandre.trading.bot/cassandre-trading-bot-spring-boot-autoconfigure/latest/tech/cassandre/trading/bot/strategy/GenericCassandreStrategy.html#initialize()",target:"_blank",rel:"noopener noreferrer"},h=e("h2",{id:"recuperation-des-donnees-importees",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#recuperation-des-donnees-importees","aria-hidden":"true"},"#"),t(" Récupération des données importées")],-1),p=e("p",null,"Dans votre stratégie, vous pouvez récupérer les données importées à l'aide de ses deux méthodes :",-1),m={href:"https://www.javadoc.io/doc/tech.cassandre.trading.bot/cassandre-trading-bot-spring-boot-autoconfigure/latest/tech/cassandre/trading/bot/strategy/GenericCassandreStrategy.html#getImportedTickers()",target:"_blank",rel:"noopener noreferrer"},q={href:"https://www.javadoc.io/doc/tech.cassandre.trading.bot/cassandre-trading-bot-spring-boot-autoconfigure/latest/tech/cassandre/trading/bot/strategy/GenericCassandreStrategy.html#getImportedTickers(tech.cassandre.trading.bot.dto.util.CurrencyPairDTO)",target:"_blank",rel:"noopener noreferrer"};function g(v,_){const o=n("ExternalLinkIcon");return s(),i("div",null,[u,e("p",null,[t("Dans votre stratégie, vous pouvez implémenter la méthode "),e("a",l,[t("initialize()"),r(o)]),t(" . Cette méthode est exécutée par Cassandre avant que n'importe quelle autre donnée ne soit poussée à vos stratégies.")]),h,p,e("ul",null,[e("li",null,[e("a",m,[t("getImportedTickers()"),r(o)]),t(" .")]),e("li",null,[e("a",q,[t("getImportedTickers(CurrencyPairDTO currencyPairDTO)"),r(o)]),t(" .")])])])}const b=a(c,[["render",g],["__file","import-historical-data.html.vue"]]);export{b as default};