package tech.cassandre.trading.bot.util.mapper;

import org.knowm.xchange.dto.marketdata.Ticker;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;
import tech.cassandre.trading.bot.domain.ImportedTicker;
import tech.cassandre.trading.bot.dto.market.TickerDTO;

import java.time.OffsetDateTime;
import java.time.ZoneId;
import java.util.Date;

/**
 * Ticker mapper.
 */
@Mapper(uses = {CurrencyMapper.class})
public interface TickerMapper {

    // =================================================================================================================
    // XChange to DTO.

    @Mapping(source = "instrument", target = "currencyPair")
    @Mapping(source = "timestamp", target = "timestamp", qualifiedByName = "mapDateToOffsetDateTime")
    TickerDTO mapToTickerDTO(Ticker source);

    // =================================================================================================================
    // Domain to DTO.

    TickerDTO mapToTickerDTO(ImportedTicker source);

    @Named("mapDateToOffsetDateTime")
    default OffsetDateTime mapDateToOffsetDateTime(Date value) {
        return value == null ? null : value.toInstant().atZone(ZoneId.systemDefault()).toOffsetDateTime();
    }

}
