import{_ as s,r as i,o as r,c as t,b as e,a as c,F as o,d as n,e as l}from"./app.6769468a.js";const d={},p=e("h1",{id:"create-your-cassandre-project",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#create-your-cassandre-project","aria-hidden":"true"},"#"),n(" Create your Cassandre project")],-1),v=n("If you don't have an existing spring boot project, you can use our "),u={href:"https://search.maven.org/search?q=a:cassandre-trading-bot-spring-boot-starter-basic-archetype",target:"_blank",rel:"noopener noreferrer"},m=n("maven archetype"),b=n(" to generate one:"),h=l(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mvn archetype:generate -B <span class="token punctuation">\\</span>
-DarchetypeGroupId<span class="token operator">=</span>tech.cassandre.trading.bot <span class="token punctuation">\\</span>
-DarchetypeArtifactId<span class="token operator">=</span>cassandre-trading-bot-spring-boot-starter-basic-archetype <span class="token punctuation">\\</span>
-DarchetypeVersion<span class="token operator">=</span><span class="token number">5.0</span>.9-SNAPSHOT <span class="token punctuation">\\</span>
-DgroupId<span class="token operator">=</span>com.mycompany.bot <span class="token punctuation">\\</span>
-DartifactId<span class="token operator">=</span>my-trading-bot <span class="token punctuation">\\</span>
-Dversion<span class="token operator">=</span><span class="token number">1.0</span>-SNAPSHOT <span class="token punctuation">\\</span>
-Dpackage<span class="token operator">=</span>com.mycompany.bot
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The created project will have the following structure and files:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>my-trading-bot/
\u251C\u2500\u2500 pom.xml
\u2514\u2500\u2500 src
    \u251C\u2500\u2500 main
    \u2502   \u251C\u2500\u2500 java
    \u2502   \u2502   \u2514\u2500\u2500 com
    \u2502   \u2502       \u2514\u2500\u2500 mycompany
    \u2502   \u2502           \u2514\u2500\u2500 bot
    \u2502   \u2502               \u251C\u2500\u2500 Application.java
    \u2502   \u2502               \u251C\u2500\u2500 package-info.java
    \u2502   \u2502               \u2514\u2500\u2500 SimpleStrategy.java
    \u2502   \u2514\u2500\u2500 resources
    \u2502       \u2514\u2500\u2500 application.properties
    \u2514\u2500\u2500 test
        \u251C\u2500\u2500 java
        \u2502   \u2514\u2500\u2500 com
        \u2502       \u2514\u2500\u2500 mycompany
        \u2502           \u2514\u2500\u2500 bot
        \u2502               \u2514\u2500\u2500 SimpleStrategyTest.java
        \u2514\u2500\u2500 resources
            \u251C\u2500\u2500 application.properties
            \u251C\u2500\u2500 candles-for-backtesting-BTC-USDT.csv
            \u251C\u2500\u2500 user-main.tsv
            \u251C\u2500\u2500 user-savings.csv
            \u2514\u2500\u2500 user-trade.csv

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function g(_,y){const a=i("ExternalLinkIcon");return r(),t(o,null,[p,e("p",null,[v,e("a",u,[m,c(a)]),b]),h],64)}var f=s(d,[["render",g],["__file","create-your-project.html.vue"]]);export{f as default};