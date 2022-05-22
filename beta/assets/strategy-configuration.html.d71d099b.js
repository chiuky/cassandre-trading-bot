import{_ as a,e}from"./app.5acd35c2.js";const n={},s=e(`<h1 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h1><p>The configuration file can be found in: <code>src/main/resources/application.properties</code>.</p><p>Here is an example:</p><div class="language-properties ext-properties line-numbers-mode"><pre class="language-properties"><code><span class="token comment">#</span>
<span class="token comment"># Exchange configuration.</span>
<span class="token key attr-name">cassandre.trading.bot.exchange.driver-class-name</span><span class="token punctuation">=</span><span class="token value attr-value">org.knowm.xchange.kucoin.KucoinExchange</span>
<span class="token key attr-name">cassandre.trading.bot.exchange.username</span><span class="token punctuation">=</span><span class="token value attr-value">kucoin.cassandre.test@gmail.com</span>
<span class="token key attr-name">cassandre.trading.bot.exchange.passphrase</span><span class="token punctuation">=</span><span class="token value attr-value">cassandre</span>
<span class="token key attr-name">cassandre.trading.bot.exchange.key</span><span class="token punctuation">=</span><span class="token value attr-value">6054ad25365ac6000689a998</span>
<span class="token key attr-name">cassandre.trading.bot.exchange.secret</span><span class="token punctuation">=</span><span class="token value attr-value">af080d55-afe3-47c9-8ec1-4b479fbcc5e7</span>
<span class="token comment">#</span>
<span class="token comment"># Modes.</span>
<span class="token key attr-name">cassandre.trading.bot.exchange.modes.sandbox</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token key attr-name">cassandre.trading.bot.exchange.modes.dry</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>
<span class="token comment">#</span>
<span class="token comment"># Exchange API calls rates (In ms or standard ISO 8601 duration like &#39;PT5S&#39;).</span>
<span class="token key attr-name">cassandre.trading.bot.exchange.rates.account</span><span class="token punctuation">=</span><span class="token value attr-value">2000</span>
<span class="token key attr-name">cassandre.trading.bot.exchange.rates.ticker</span><span class="token punctuation">=</span><span class="token value attr-value">2000</span>
<span class="token key attr-name">cassandre.trading.bot.exchange.rates.trade</span><span class="token punctuation">=</span><span class="token value attr-value">2000</span>
<span class="token comment">#</span>
<span class="token comment"># Database configuration.</span>
<span class="token key attr-name">spring.datasource.driver-class-name</span><span class="token punctuation">=</span><span class="token value attr-value">org.hsqldb.jdbc.JDBCDriver</span>
<span class="token key attr-name">spring.datasource.url</span><span class="token punctuation">=</span><span class="token value attr-value">jdbc:hsqldb:mem:cassandre</span>
<span class="token key attr-name">spring.datasource.username</span><span class="token punctuation">=</span><span class="token value attr-value">sa</span>
<span class="token key attr-name">spring.datasource.password</span><span class="token punctuation">=</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="exchange-configuration" tabindex="-1"><a class="header-anchor" href="#exchange-configuration" aria-hidden="true">#</a> Exchange configuration</h2><p>TODO ajouter la partie ajouter xchange lib TODO Ajouter un lien vers la doc des exchange</p><p>The <code>Exchange configuration</code> part contains the parameters used by Cassandre to connect the exchange you chose. The first parameter <code>driver-class-name</code>, the XChange class Cassandre should use to connect.</p><p>The other parameters are the one given by you exchange when you will create an API access there.</p><h2 id="modes" tabindex="-1"><a class="header-anchor" href="#modes" aria-hidden="true">#</a> Modes</h2><p>Cassandre has two modes:</p><ul><li>The <code>sandbox</code>, only supported by some exchanges, allows you to use a &#39;fake account&#39; on the exchange to make your bot run with simulated data. Kucoin &amp; Coinbase supports this.</li><li>The <code>dry</code> makes Cassandre simulate an exchange. This mode allows you to test your strategy on historical data and see how many gains it generates. This mode is usually used with JUnit tests.</li></ul><h2 id="rates" tabindex="-1"><a class="header-anchor" href="#rates" aria-hidden="true">#</a> Rates</h2><p><code>rates</code> parameters tells Cassandre at which interval it should get data from the exchange.</p><h2 id="database-configuration" tabindex="-1"><a class="header-anchor" href="#database-configuration" aria-hidden="true">#</a> Database configuration</h2><p>Those parameters indicate the database parameters to use to connect to the database used by Cassandre to save its information.</p>`,15);function t(c,r){return s}var i=a(n,[["render",t],["__file","strategy-configuration.html.vue"]]);export{i as default};
