package tech.cassandre.trading.bot.util.csv;

import com.opencsv.bean.AbstractBeanField;
import lombok.NonNull;
import tech.cassandre.trading.bot.domain.ImportedTicker;

import java.time.OffsetDateTime;
import java.time.ZoneId;
import java.util.Date;

/**
 * Allows to transform an epoch time to a Offset date time.
 */
public class EpochToOffsetDateTime extends AbstractBeanField<ImportedTicker, ImportedTicker> {

    /** To milliseconds. */
    public static final int MILLISECONDS = 1_000;

    @Override
    protected final Object convert(@NonNull final String value) {
        return OffsetDateTime.ofInstant(new Date(Long.parseLong(value.trim()) * MILLISECONDS).toInstant(), ZoneId.systemDefault());
    }

}
