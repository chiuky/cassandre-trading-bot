import{_ as o,r as i,o as r,c,b as n,a as t,F as d,d as e,e as a}from"./app.ec957074.js";const l={},p=n("h1",{id:"gestion-des-positions",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#gestion-des-positions","aria-hidden":"true"},"#"),e(" Gestion des positions")],-1),u=n("p",null,"Cassandre fourni un moyen de g\xE9rer facilement et automatiquement des positions.",-1),h=n("h2",{id:"position-longue",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#position-longue","aria-hidden":"true"},"#"),e(" Position longue")],-1),g=e("Dans votre strat\xE9gie, vous pouvez cr\xE9er une position longue avec la m\xE9thode "),_={href:"https://www.javadoc.io/doc/tech.cassandre.trading.bot/cassandre-trading-bot-spring-boot-autoconfigure/latest/tech/cassandre/trading/bot/strategy/GenericCassandreStrategy.html#createLongPosition%28tech.cassandre.trading.bot.dto.util.CurrencyPairDTO,java.math.BigDecimal,tech.cassandre.trading.bot.dto.position.PositionRulesDTO%29",target:"_blank",rel:"noopener noreferrer"},v=e("createLongPosition()"),b=a(`<p>Cette m\xE9thode a trois param\xE8tres :</p><ul><li>La paire de devise (Par exemple : <code>ETH/USDT</code>).</li><li>Le montant (par exemple : <code>0.5 ETH</code>).</li><li>Les r\xE8gles (par exemple : <code>100% de gain ou 50% de perte</code>).</li></ul><p>Voici comment cr\xE9er les r\xE8gles d&#39;une position avec l&#39;objet <code>PositionRulesDTO</code> :</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">PositionRulesDTO</span> rules<span class="token operator">=</span><span class="token class-name">PositionRulesDTO</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">stopGainPercentage</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">stopLossPercentage</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Vous pouvez ensuite cr\xE9er la position de cette fa\xE7on:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token function">createLongPosition</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">CurrencyPairDTO</span><span class="token punctuation">(</span>ETH<span class="token punctuation">,</span>BTC<span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token string">&quot;0.5&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        rules<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),m=e("\xC0 ce moment, Cassandre va cr\xE9er un ordre d'achat de 0,5 ETH (1 ETH co\xFBte 1500 USDT), et cela nous co\xFBtera donc 750 USDT. Le statut de la position sera alors "),k={href:"https://www.javadoc.io/doc/tech.cassandre.trading.bot/cassandre-trading-bot-spring-boot-autoconfigure/latest/tech/cassandre/trading/bot/dto/position/PositionStatusDTO.html#OPENING",target:"_blank",rel:"noopener noreferrer"},f=e("OPENING"),w=e(" , et lorsque tous les trades correspondants seront arriv\xE9s, le statut passera \xE0 "),T={href:"https://www.javadoc.io/doc/tech.cassandre.trading.bot/cassandre-trading-bot-spring-boot-autoconfigure/latest/tech/cassandre/trading/bot/dto/position/PositionStatusDTO.html#OPENED",target:"_blank",rel:"noopener noreferrer"},D=e("OPENED"),P=e(" ."),O={class:"custom-container tip"},C=n("p",{class:"custom-container-title"},"TIP",-1),j=e("Si vous souhaitez v\xE9rifier si vous disposez de suffisamment de fonds (au moins 750 USDT dans notre cas) avant de cr\xE9er la position, vous pouvez utiliser la m\xE9thode "),x={href:"https://www.javadoc.io/doc/tech.cassandre.trading.bot/cassandre-trading-bot-spring-boot-autoconfigure/latest/tech/cassandre/trading/bot/strategy/GenericCassandreStrategy.html#canBuy%28tech.cassandre.trading.bot.dto.user.AccountDTO,tech.cassandre.trading.bot.dto.util.CurrencyPairDTO,java.math.BigDecimal%29",target:"_blank",rel:"noopener noreferrer"},S=e("canBuy()"),E=e(" ."),L=n("p",null,"D\xE9sormais, pour chaque ticker re\xE7u, Cassandre calculera automatiquement, avec le nouveau prix (issu du ticker), si la cl\xF4ture de la position \xE0 ce prix d\xE9clencherait l'une de nos deux r\xE8gles (100% de gain et 50% de perte).",-1),G=e(`Par exemple, si nous recevons un nouveau prix de 3 000 USDT pour 1 ETH, Cassandre calculera que si nous vendons notre position maintenant (ce que l'on appelle "fermer la position"), nous obtiendrons 1 500 USDT, soit un gain de 100%. Cassandre va donc cr\xE9er automatiquement un ordre de vente de nos 0,5 ETH. Le statut de la position passera \xE0 `),y={href:"https://www.javadoc.io/doc/tech.cassandre.trading.bot/cassandre-trading-bot-spring-boot-autoconfigure/latest/tech/cassandre/trading/bot/dto/position/PositionStatusDTO.html#CLOSING",target:"_blank",rel:"noopener noreferrer"},q=e("CLOSING"),H=e(" , et lorsque tous les trades correspondants seront arriv\xE9s, le statut passera \xE0 "),N={href:"https://www.javadoc.io/doc/tech.cassandre.trading.bot/cassandre-trading-bot-spring-boot-autoconfigure/latest/tech/cassandre/trading/bot/dto/position/PositionStatusDTO.html#CLOSED",target:"_blank",rel:"noopener noreferrer"},B=e("CLOSED"),z=e(" ."),U=e("Vous pourrez alors conna\xEEtre votre gain exact sur cette position en appelant la m\xE9thode "),I={href:"https://www.javadoc.io/doc/tech.cassandre.trading.bot/cassandre-trading-bot-spring-boot-autoconfigure/latest/tech/cassandre/trading/bot/dto/position/PositionDTO.html#getGain()",target:"_blank",rel:"noopener noreferrer"},V=e("getGain()"),R=e(" ."),A=a(`<h2 id="position-courte" tabindex="-1"><a class="header-anchor" href="#position-courte" aria-hidden="true">#</a> Position courte</h2><p>Une position courte est l&#39;inverse d&#39;une position longue. Avec une position courte, vous pariez sur le fait que le prix va baisser.</p><p>Disons que vous cr\xE9ez une position courte sur 1 ETH avec ce code :</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token function">createShortPosition</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">CurrencyPairDTO</span><span class="token punctuation">(</span>ETH<span class="token punctuation">,</span>BTC<span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        rules<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Cassandre vendra 1 ETH et obtiendra 1 500 USDT et attendra que le prix baisse suffisamment pour acheter 2 ETH avec 1 500 USDT.</p><h2 id="gains" tabindex="-1"><a class="header-anchor" href="#gains" aria-hidden="true">#</a> Gains</h2>`,6),F=e("Sur l'objet "),M={href:"https://www.javadoc.io/doc/tech.cassandre.trading.bot/cassandre-trading-bot-spring-boot-autoconfigure/latest/tech/cassandre/trading/bot/dto/position/PositionDTO.html",target:"_blank",rel:"noopener noreferrer"},J=e("Position"),K=e(" , vous pouvez obtenir :"),Q=e("Le gain calcul\xE9 le plus bas avec "),W={href:"https://www.javadoc.io/doc/tech.cassandre.trading.bot/cassandre-trading-bot-spring-boot-autoconfigure/latest/tech/cassandre/trading/bot/dto/position/PositionDTO.html#getLowestCalculatedGain()",target:"_blank",rel:"noopener noreferrer"},X=e("getLowestCalculatedGain()"),Y=e("Le gain calcul\xE9 le plus \xE9lev\xE9 avec "),Z={href:"https://www.javadoc.io/doc/tech.cassandre.trading.bot/cassandre-trading-bot-spring-boot-autoconfigure/latest/tech/cassandre/trading/bot/dto/position/PositionDTO.html#getHighestCalculatedGain()",target:"_blank",rel:"noopener noreferrer"},$=e("getHighestCalculatedGain()"),ee=e("Le dernier gain calcul\xE9 avec "),ne={href:"https://www.javadoc.io/doc/tech.cassandre.trading.bot/cassandre-trading-bot-spring-boot-autoconfigure/latest/tech/cassandre/trading/bot/dto/position/PositionDTO.html#getLatestCalculatedGain()",target:"_blank",rel:"noopener noreferrer"},se=e("getLatestCalculatedGain()"),te=e("Sur une position ferm\xE9e, vous pouvez obtenir le gain et les frais associ\xE9s avec la m\xE9thode "),ae={href:"https://www.javadoc.io/doc/tech.cassandre.trading.bot/cassandre-trading-bot-spring-boot-autoconfigure/latest/tech/cassandre/trading/bot/dto/position/PositionDTO.html#getGain()",target:"_blank",rel:"noopener noreferrer"},oe=e("getGain()"),ie=e(".");function re(ce,de){const s=i("ExternalLinkIcon");return r(),c(d,null,[p,u,h,n("p",null,[g,n("a",_,[v,t(s)])]),b,n("p",null,[m,n("a",k,[f,t(s)]),w,n("a",T,[D,t(s)]),P]),n("div",O,[C,n("p",null,[j,n("a",x,[S,t(s)]),E])]),L,n("p",null,[G,n("a",y,[q,t(s)]),H,n("a",N,[B,t(s)]),z]),n("p",null,[U,n("a",I,[V,t(s)]),R]),A,n("p",null,[F,n("a",M,[J,t(s)]),K]),n("ul",null,[n("li",null,[Q,n("a",W,[X,t(s)])]),n("li",null,[Y,n("a",Z,[$,t(s)])]),n("li",null,[ee,n("a",ne,[se,t(s)])])]),n("p",null,[te,n("a",ae,[oe,t(s)]),ie])],64)}var pe=o(l,[["render",re],["__file","strategy-positions-management.html.vue"]]);export{pe as default};
