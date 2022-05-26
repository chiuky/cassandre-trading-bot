import{_ as a,r as s,o as n,c as i,b as e,a as r,e as d,d as t}from"./app.1a95bf67.js";const c={},u=d(`<h1 id="importer-des-donnees-historiques" tabindex="-1"><a class="header-anchor" href="#importer-des-donnees-historiques" aria-hidden="true">#</a> Importer des donn\xE9es historiques</h1><h2 id="presentation" tabindex="-1"><a class="header-anchor" href="#presentation" aria-hidden="true">#</a> Pr\xE9sentation</h2><p>Cette fonctionnalit\xE9 vous permet d&#39;importer des donn\xE9es historiques au d\xE9marrage de votre bot et de les utiliser pour initialiser votre strat\xE9gie.</p><h2 id="donnees-format" tabindex="-1"><a class="header-anchor" href="#donnees-format" aria-hidden="true">#</a> Donn\xE9es &amp; format</h2><p>Au d\xE9marrage, Cassandre va chercher des fichiers commen\xE7ant par <code>candles-to-import-</code> et finissant par <code>csv</code>.</p><p>Voici comment vos donn\xE9es doivent \xEAtre format\xE9es :</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&quot;TIMESTAMP&quot;, &quot;OPEN&quot;, &quot;CLOSE&quot;, &quot;HIGH&quot;, &quot;LOW&quot;, &quot;VOLUME&quot;, &quot;QUOTE_VOLUME&quot;, &quot;CURRENCY_PAIR&quot;
&quot;1640044800&quot;,&quot;46898.1&quot;,&quot;48891.4&quot;,&quot;49322&quot;,&quot;46655.6&quot;,&quot;7389.39809406&quot;,&quot;357318509.007992951&quot;,&quot;BTC-USDT&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="quand-pouvez-vous-initialiser-vos-donnees" tabindex="-1"><a class="header-anchor" href="#quand-pouvez-vous-initialiser-vos-donnees" aria-hidden="true">#</a> Quand pouvez-vous initialiser vos donn\xE9es ?</h2>`,8),h=t("Dans votre strat\xE9gie, vous pouvez impl\xE9menter la m\xE9thode "),l={href:"https://www.javadoc.io/doc/tech.cassandre.trading.bot/cassandre-trading-bot-spring-boot-autoconfigure/latest/tech/cassandre/trading/bot/strategy/GenericCassandreStrategy.html#initialize()",target:"_blank",rel:"noopener noreferrer"},p=t("initialize()"),m=t(" . Cette m\xE9thode est ex\xE9cut\xE9e par Cassandre avant que n'importe quelle autre donn\xE9e ne soit pouss\xE9e \xE0 vos strat\xE9gies."),_=e("h2",{id:"recuperation-des-donnees-importees",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#recuperation-des-donnees-importees","aria-hidden":"true"},"#"),t(" R\xE9cup\xE9ration des donn\xE9es import\xE9es")],-1),q=e("p",null,"Dans votre strat\xE9gie, vous pouvez r\xE9cup\xE9rer les donn\xE9es import\xE9es \xE0 l'aide de ses deux m\xE9thodes :",-1),g={href:"https://www.javadoc.io/doc/tech.cassandre.trading.bot/cassandre-trading-bot-spring-boot-autoconfigure/latest/tech/cassandre/trading/bot/strategy/GenericCassandreStrategy.html#getImportedTickers()",target:"_blank",rel:"noopener noreferrer"},v=t("getImportedTickers()"),f=t(" ."),b={href:"https://www.javadoc.io/doc/tech.cassandre.trading.bot/cassandre-trading-bot-spring-boot-autoconfigure/latest/tech/cassandre/trading/bot/strategy/GenericCassandreStrategy.html#getImportedTickers(tech.cassandre.trading.bot.dto.util.CurrencyPairDTO)",target:"_blank",rel:"noopener noreferrer"},x=t("getImportedTickers(CurrencyPairDTO currencyPairDTO)"),C=t(" .");function T(k,E){const o=s("ExternalLinkIcon");return n(),i("div",null,[u,e("p",null,[h,e("a",l,[p,r(o)]),m]),_,q,e("ul",null,[e("li",null,[e("a",g,[v,r(o)]),f]),e("li",null,[e("a",b,[x,r(o)]),C])])])}var w=a(c,[["render",T],["__file","import-historical-data.html.vue"]]);export{w as default};
