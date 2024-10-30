package tech.cassandre.trading.bot.util.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingConstants;
import org.mapstruct.Named;
import tech.cassandre.trading.bot.domain.BacktestingCandle;
import tech.cassandre.trading.bot.domain.ImportedCandle;
import tech.cassandre.trading.bot.dto.market.TickerDTO;

import java.time.OffsetDateTime;
import java.time.ZoneId;
import java.util.Date;

/**
 * Backtesting candle mapper.
 */
@Mapper(uses = CurrencyMapper.class, componentModel = MappingConstants.ComponentModel.JAKARTA)
public interface BacktestingTickerMapper {

    // =================================================================================================================
    // ImportedCandle to BacktestingCandle.
    @Mapping(target = "id", ignore = true)
    BacktestingCandle mapToBacktestingCandle(ImportedCandle source);

    // =================================================================================================================
    // BacktestingTicker to TickerDTO.
    @Mapping(target = "currencyPair", source = "id.currencyPair")
    @Mapping(target = "last", source = "close")
    @Mapping(target = "bid", ignore = true)
    @Mapping(target = "ask", ignore = true)
    @Mapping(target = "vwap", ignore = true)
    @Mapping(target = "quoteVolume", ignore = true)
    @Mapping(target = "bidSize", ignore = true)
    @Mapping(target = "askSize", ignore = true)
    TickerDTO mapToTickerDTO(BacktestingCandle source);

}
