import{_ as o,r as p,o as c,c as i,b as s,a as t,F as l,d as n,e}from"./app.5acd35c2.js";const u={},r=s("h1",{id:"strategy-events",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#strategy-events","aria-hidden":"true"},"#"),n(" Strategy events")],-1),d=s("p",null,"By implementing some methods in your strategy, you can receive updates when there is a change on your data on the exchange (for example: a new order or new assets received), or new events (for example: a new ticker on BTC/USDT).",-1),k=s("h2",{id:"accounts-updates",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#accounts-updates","aria-hidden":"true"},"#"),n(" Accounts updates")],-1),v=n("If the amount of your assets on your account change, "),h={href:"https://www.javadoc.io/doc/tech.cassandre.trading.bot/cassandre-trading-bot-spring-boot-autoconfigure/latest/tech/cassandre/trading/bot/strategy/GenericCassandreStrategy.html#onAccountsUpdates(java.util.Map)",target:"_blank",rel:"noopener noreferrer"},m=n("onAccountsUpdates()"),g=n(" will be called."),b=e(`<div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Override</span>
<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">void</span> <span class="token function">onAccountsUpdates</span><span class="token punctuation">(</span><span class="token keyword">final</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">AccountDTO</span><span class="token punctuation">&gt;</span></span> accounts<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// Here, we will receive an AccountDTO each time there is a change on your account.</span>
        accounts<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>account<span class="token operator">-&gt;</span><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Received information about an account: &quot;</span><span class="token operator">+</span>account<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="tickers-updates" tabindex="-1"><a class="header-anchor" href="#tickers-updates" aria-hidden="true">#</a> Tickers updates</h2>`,2),_=n("If a new ticker is available, "),f={href:"https://www.javadoc.io/doc/tech.cassandre.trading.bot/cassandre-trading-bot-spring-boot-autoconfigure/latest/tech/cassandre/trading/bot/strategy/GenericCassandreStrategy.html#onTickersUpdates(java.util.Map)",target:"_blank",rel:"noopener noreferrer"},w=n("onTickersUpdates()"),y=n(" will be called."),j=e(`<div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Override</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onTickersUpdates</span><span class="token punctuation">(</span><span class="token keyword">final</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">CurrencyPairDTO</span><span class="token punctuation">,</span> <span class="token class-name">TickerDTO</span><span class="token punctuation">&gt;</span></span> tickers<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// Here we will receive all tickers we required from the exchange.</span>
        tickers<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>ticker<span class="token operator">-&gt;</span><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Received information about a ticker: &quot;</span><span class="token operator">+</span>ticker<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="orders-updates" tabindex="-1"><a class="header-anchor" href="#orders-updates" aria-hidden="true">#</a> Orders updates</h2>`,2),T=n("If an order is created or updated, "),x={href:"https://www.javadoc.io/doc/tech.cassandre.trading.bot/cassandre-trading-bot-spring-boot-autoconfigure/latest/tech/cassandre/trading/bot/strategy/GenericCassandreStrategy.html#onOrdersUpdates(java.util.Map)",target:"_blank",rel:"noopener noreferrer"},O=n("onOrdersUpdates()"),S=n(" will be called."),U=e(`<div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Override</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onOrdersUpdates</span><span class="token punctuation">(</span><span class="token keyword">final</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">OrderDTO</span><span class="token punctuation">&gt;</span></span> orders<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// Here, we will receive an OrderDTO each time order data has changed on the exchange.</span>
        orders<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>order<span class="token operator">-&gt;</span><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Received information about an order: &quot;</span><span class="token operator">+</span>order<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="trades-updates" tabindex="-1"><a class="header-anchor" href="#trades-updates" aria-hidden="true">#</a> Trades updates</h2>`,2),q=n("If a trade is created or updated, "),D={href:"https://www.javadoc.io/doc/tech.cassandre.trading.bot/cassandre-trading-bot-spring-boot-autoconfigure/latest/tech/cassandre/trading/bot/strategy/GenericCassandreStrategy.html#onTradesUpdates(java.util.Map)",target:"_blank",rel:"noopener noreferrer"},P=n("onTradesUpdates()"),M=n(" will be called."),E=e(`<div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Override</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onTradesUpdates</span><span class="token punctuation">(</span><span class="token keyword">final</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">TradeDTO</span><span class="token punctuation">&gt;</span></span> trades<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// Here, we will receive a TradeDTO each time trade data has changed on the exchange.</span>
        trades<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>trade<span class="token operator">-&gt;</span><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Received information about a trade: &quot;</span><span class="token operator">+</span>trade<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="positions-updates" tabindex="-1"><a class="header-anchor" href="#positions-updates" aria-hidden="true">#</a> Positions updates</h2>`,2),C=n("If a position is created or updated, "),I={href:"https://www.javadoc.io/doc/tech.cassandre.trading.bot/cassandre-trading-bot-spring-boot-autoconfigure/latest/tech/cassandre/trading/bot/strategy/GenericCassandreStrategy.html#onPositionsUpdates(java.util.Map)",target:"_blank",rel:"noopener noreferrer"},A=n("onPositionsUpdates()"),G=n(" will be called."),H=e(`<div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    <span class="token annotation punctuation">@Override</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onPositionsUpdates</span><span class="token punctuation">(</span><span class="token keyword">final</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Long</span><span class="token punctuation">,</span> <span class="token class-name">PositionDTO</span><span class="token punctuation">&gt;</span></span> positions<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// Here, we will receive a PositionDTO each time a position has changed.</span>
        positions<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>position<span class="token operator">-&gt;</span><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Received information about a position: &quot;</span><span class="token operator">+</span>position<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="positions-status-updates" tabindex="-1"><a class="header-anchor" href="#positions-status-updates" aria-hidden="true">#</a> Positions status updates</h2>`,2),R=n("If a position status is updated, "),B={href:"https://www.javadoc.io/doc/tech.cassandre.trading.bot/cassandre-trading-bot-spring-boot-autoconfigure/latest/tech/cassandre/trading/bot/strategy/GenericCassandreStrategy.html#onPositionsStatusUpdates(java.util.Map)",target:"_blank",rel:"noopener noreferrer"},L=n("onPositionsStatusUpdates()"),N=n(" will be called."),V=e(`<div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Override</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onPositionsStatusUpdates</span><span class="token punctuation">(</span><span class="token keyword">final</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Long</span><span class="token punctuation">,</span> <span class="token class-name">PositionDTO</span><span class="token punctuation">&gt;</span></span> positions<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// Here, we will receive a PositionDTO each time a position status has changed.</span>
        positions<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>position<span class="token operator">-&gt;</span><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Received information about a position status: &quot;</span><span class="token operator">+</span>position<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function F(z,J){const a=p("ExternalLinkIcon");return c(),i(l,null,[r,d,k,s("p",null,[v,s("a",h,[m,t(a)]),g]),b,s("p",null,[_,s("a",f,[w,t(a)]),y]),j,s("p",null,[T,s("a",x,[O,t(a)]),S]),U,s("p",null,[q,s("a",D,[P,t(a)]),M]),E,s("p",null,[C,s("a",I,[A,t(a)]),G]),H,s("p",null,[R,s("a",B,[L,t(a)]),N]),V],64)}var Q=o(u,[["render",F],["__file","strategy-events.html.vue"]]);export{Q as default};