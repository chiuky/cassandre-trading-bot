import{_ as e,r as o,o as p,c,b as s,a as t,F as i,e as l,d as n}from"./app.6769468a.js";const u={},r=l(`<h1 id="explore-generated-code" tabindex="-1"><a class="header-anchor" href="#explore-generated-code" aria-hidden="true">#</a> Explore generated code</h1><p>Our archetype has created a strategy in <code>my-trading-bot/src/main/java/com/mycompany/bot/SimpleStrategy.java</code>:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>mycompany<span class="token punctuation">.</span>bot</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">tech<span class="token punctuation">.</span>cassandre<span class="token punctuation">.</span>trading<span class="token punctuation">.</span>bot<span class="token punctuation">.</span>dto<span class="token punctuation">.</span>market<span class="token punctuation">.</span></span><span class="token class-name">TickerDTO</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">tech<span class="token punctuation">.</span>cassandre<span class="token punctuation">.</span>trading<span class="token punctuation">.</span>bot<span class="token punctuation">.</span>dto<span class="token punctuation">.</span>position<span class="token punctuation">.</span></span><span class="token class-name">PositionDTO</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">tech<span class="token punctuation">.</span>cassandre<span class="token punctuation">.</span>trading<span class="token punctuation">.</span>bot<span class="token punctuation">.</span>dto<span class="token punctuation">.</span>trade<span class="token punctuation">.</span></span><span class="token class-name">OrderDTO</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">tech<span class="token punctuation">.</span>cassandre<span class="token punctuation">.</span>trading<span class="token punctuation">.</span>bot<span class="token punctuation">.</span>dto<span class="token punctuation">.</span>trade<span class="token punctuation">.</span></span><span class="token class-name">TradeDTO</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">tech<span class="token punctuation">.</span>cassandre<span class="token punctuation">.</span>trading<span class="token punctuation">.</span>bot<span class="token punctuation">.</span>dto<span class="token punctuation">.</span>user<span class="token punctuation">.</span></span><span class="token class-name">AccountDTO</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">tech<span class="token punctuation">.</span>cassandre<span class="token punctuation">.</span>trading<span class="token punctuation">.</span>bot<span class="token punctuation">.</span>dto<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">CurrencyPairDTO</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">tech<span class="token punctuation">.</span>cassandre<span class="token punctuation">.</span>trading<span class="token punctuation">.</span>bot<span class="token punctuation">.</span>strategy<span class="token punctuation">.</span></span><span class="token class-name">BasicCassandreStrategy</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">tech<span class="token punctuation">.</span>cassandre<span class="token punctuation">.</span>trading<span class="token punctuation">.</span>bot<span class="token punctuation">.</span>strategy<span class="token punctuation">.</span></span><span class="token class-name">CassandreStrategy</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Map</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Optional</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Set</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token keyword">static</span> <span class="token import static"><span class="token namespace">tech<span class="token punctuation">.</span>cassandre<span class="token punctuation">.</span>trading<span class="token punctuation">.</span>bot<span class="token punctuation">.</span>dto<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">CurrencyDTO</span><span class="token punctuation">.</span><span class="token static">BTC</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token keyword">static</span> <span class="token import static"><span class="token namespace">tech<span class="token punctuation">.</span>cassandre<span class="token punctuation">.</span>trading<span class="token punctuation">.</span>bot<span class="token punctuation">.</span>dto<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">CurrencyDTO</span><span class="token punctuation">.</span><span class="token static">USDT</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * Simple strategy.
 */</span>
<span class="token annotation punctuation">@CassandreStrategy</span><span class="token punctuation">(</span>strategyName <span class="token operator">=</span> <span class="token string">&quot;Simple strategy&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name">SimpleStrategy</span> <span class="token keyword">extends</span> <span class="token class-name">BasicCassandreStrategy</span> <span class="token punctuation">{</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">CurrencyPairDTO</span><span class="token punctuation">&gt;</span></span> <span class="token function">getRequestedCurrencyPairs</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// We only ask for BTC/USDT tickers (Base currency : BTC / Quote currency : USDT).</span>
		<span class="token keyword">return</span> <span class="token class-name">Set</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">CurrencyPairDTO</span><span class="token punctuation">(</span>BTC<span class="token punctuation">,</span> USDT<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token class-name">Optional</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">AccountDTO</span><span class="token punctuation">&gt;</span></span> <span class="token function">getTradeAccount</span><span class="token punctuation">(</span><span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">AccountDTO</span><span class="token punctuation">&gt;</span></span> accounts<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// From all the accounts we have on the exchange, we must return the one we use for trading.</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>accounts<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// If there is only one on the exchange, we choose this one.</span>
			<span class="token keyword">return</span> accounts<span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">findFirst</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			<span class="token comment">// If there are several accounts on the exchange, we choose the one whose name is &quot;trade&quot;.</span>
			<span class="token keyword">return</span> accounts<span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
					<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>a <span class="token operator">-&gt;</span> <span class="token string">&quot;trade&quot;</span><span class="token punctuation">.</span><span class="token function">equalsIgnoreCase</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
					<span class="token punctuation">.</span><span class="token function">findFirst</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onAccountsUpdates</span><span class="token punctuation">(</span><span class="token keyword">final</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">AccountDTO</span><span class="token punctuation">&gt;</span></span> accounts<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// Here, we will receive an AccountDTO each time there is a change on your account.</span>
		accounts<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>account <span class="token operator">-&gt;</span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Received information about an account: &quot;</span> <span class="token operator">+</span> account<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onTickersUpdates</span><span class="token punctuation">(</span><span class="token keyword">final</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">CurrencyPairDTO</span><span class="token punctuation">,</span> <span class="token class-name">TickerDTO</span><span class="token punctuation">&gt;</span></span> tickers<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// Here we will receive all tickers we required from the exchange.</span>
		tickers<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>ticker <span class="token operator">-&gt;</span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Received information about a ticker: &quot;</span> <span class="token operator">+</span> ticker<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onOrdersUpdates</span><span class="token punctuation">(</span><span class="token keyword">final</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">OrderDTO</span><span class="token punctuation">&gt;</span></span> orders<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// Here, we will receive an OrderDTO each time order data has changed on the exchange.</span>
		orders<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>order <span class="token operator">-&gt;</span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Received information about an order: &quot;</span> <span class="token operator">+</span> order<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onTradesUpdates</span><span class="token punctuation">(</span><span class="token keyword">final</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">TradeDTO</span><span class="token punctuation">&gt;</span></span> trades<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// Here, we will receive a TradeDTO each time trade data has changed on the exchange.</span>
		trades<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>trade <span class="token operator">-&gt;</span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Received information about a trade: &quot;</span> <span class="token operator">+</span> trade<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onPositionsUpdates</span><span class="token punctuation">(</span><span class="token keyword">final</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Long</span><span class="token punctuation">,</span> <span class="token class-name">PositionDTO</span><span class="token punctuation">&gt;</span></span> positions<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// Here, we will receive a PositionDTO each time a position has changed.</span>
		positions<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>position <span class="token operator">-&gt;</span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Received information about a position: &quot;</span> <span class="token operator">+</span> position<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onPositionsStatusUpdates</span><span class="token punctuation">(</span><span class="token keyword">final</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Long</span><span class="token punctuation">,</span> <span class="token class-name">PositionDTO</span><span class="token punctuation">&gt;</span></span> positions<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// Here, we will receive a PositionDTO each time a position status has changed.</span>
		positions<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>position <span class="token operator">-&gt;</span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Received information about a position status: &quot;</span> <span class="token operator">+</span> position<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),k=n("A Cassandre strategy is a class annotated with "),d={href:"https://www.javadoc.io/doc/tech.cassandre.trading.bot/cassandre-trading-bot-spring-boot-autoconfigure/latest/tech/cassandre/trading/bot/strategy/CassandreStrategy.html",target:"_blank",rel:"noopener noreferrer"},m=n("@CassandreStrategy"),v=n(" and extending "),h={href:"https://www.javadoc.io/doc/tech.cassandre.trading.bot/cassandre-trading-bot-spring-boot-autoconfigure/latest/tech/cassandre/trading/bot/strategy/BasicCassandreStrategy.html",target:"_blank",rel:"noopener noreferrer"},g=n("BasicCassandreStrategy"),b=n("."),y=s("p",null,"This is how it works:",-1),f=n("In "),w={href:"https://www.javadoc.io/doc/tech.cassandre.trading.bot/cassandre-trading-bot-spring-boot-autoconfigure/latest/tech/cassandre/trading/bot/strategy/CassandreStrategyInterface.html#getRequestedCurrencyPairs%28%29",target:"_blank",rel:"noopener noreferrer"},_=n("getRequestedCurrencyPairs()"),T=n(", you return the list of currency pairs tickers you want to receive from the exchange."),S=n("On the exchange, you usually have several accounts, and Cassandre needs to know which one of your accounts is the trading one. To do so, you have to implement the "),O={href:"https://www.javadoc.io/doc/tech.cassandre.trading.bot/cassandre-trading-bot-spring-boot-autoconfigure/latest/tech/cassandre/trading/bot/strategy/CassandreStrategyInterface.html#getTradeAccount%28java.util.Set%29",target:"_blank",rel:"noopener noreferrer"},C=n("getTradeAccount()"),D=n(" method, which gives you as a parameter the list of accounts you own on the exchange, and from that list, you have to return the one you use for trading."),j=n("If there is a change in your account data, "),x={href:"https://www.javadoc.io/doc/tech.cassandre.trading.bot/cassandre-trading-bot-spring-boot-autoconfigure/latest/tech/cassandre/trading/bot/strategy/GenericCassandreStrategy.html#onAccountsUpdates(java.util.Map)",target:"_blank",rel:"noopener noreferrer"},q=n("onAccountsUpdates()"),U=n(" will be called."),P=n("When new tickers are available, "),I={href:"https://www.javadoc.io/doc/tech.cassandre.trading.bot/cassandre-trading-bot-spring-boot-autoconfigure/latest/tech/cassandre/trading/bot/strategy/GenericCassandreStrategy.html#onTickersUpdates(java.util.Map)",target:"_blank",rel:"noopener noreferrer"},M=n("onTickersUpdates()"),A=n(" will be called."),B=n("If there is a change in your orders, "),E={href:"https://www.javadoc.io/doc/tech.cassandre.trading.bot/cassandre-trading-bot-spring-boot-autoconfigure/latest/tech/cassandre/trading/bot/strategy/GenericCassandreStrategy.html#onOrdersUpdates(java.util.Map)",target:"_blank",rel:"noopener noreferrer"},R=n("onOrdersUpdates()"),G=n(" will be called."),H=n("If there is a change in your trades, "),N={href:"https://www.javadoc.io/doc/tech.cassandre.trading.bot/cassandre-trading-bot-spring-boot-autoconfigure/latest/tech/cassandre/trading/bot/strategy/GenericCassandreStrategy.html#onTradesUpdates(java.util.Map)",target:"_blank",rel:"noopener noreferrer"},F=n("onTradesUpdates()"),L=n(" will be called."),V=n("If there is a change in your positions, "),W={href:"https://www.javadoc.io/doc/tech.cassandre.trading.bot/cassandre-trading-bot-spring-boot-autoconfigure/latest/tech/cassandre/trading/bot/strategy/GenericCassandreStrategy.html#onPositionsUpdates(java.util.Map)",target:"_blank",rel:"noopener noreferrer"},z=n("onPositionsUpdates()"),Q=n(" will be called."),J=n("If there is a change in your position status, "),K={href:"https://www.javadoc.io/doc/tech.cassandre.trading.bot/cassandre-trading-bot-spring-boot-autoconfigure/latest/tech/cassandre/trading/bot/strategy/GenericCassandreStrategy.html#onPositionsStatusUpdates(java.util.Map)",target:"_blank",rel:"noopener noreferrer"},X=n("onPositionsStatusUpdates()"),Y=n(" will be called.");function Z($,nn){const a=o("ExternalLinkIcon");return p(),c(i,null,[r,s("p",null,[k,s("a",d,[m,t(a)]),v,s("a",h,[g,t(a)]),b]),y,s("ul",null,[s("li",null,[f,s("a",w,[_,t(a)]),T]),s("li",null,[S,s("a",O,[C,t(a)]),D]),s("li",null,[j,s("a",x,[q,t(a)]),U]),s("li",null,[P,s("a",I,[M,t(a)]),A]),s("li",null,[B,s("a",E,[R,t(a)]),G]),s("li",null,[H,s("a",N,[F,t(a)]),L]),s("li",null,[V,s("a",W,[z,t(a)]),Q]),s("li",null,[J,s("a",K,[X,t(a)]),Y])])],64)}var an=e(u,[["render",Z],["__file","explore-generated-code.html.vue"]]);export{an as default};