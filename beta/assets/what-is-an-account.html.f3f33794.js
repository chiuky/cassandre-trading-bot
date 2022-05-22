import{_ as t,e}from"./app.ec957074.js";const a={},n=e('<h1 id="what-is-an-account" tabindex="-1"><a class="header-anchor" href="#what-is-an-account" aria-hidden="true">#</a> What is an account ?</h1><p>Usually, in an exchange, you can have several accounts with different usages (Classical, trading, margin trading, future\u2026), and then you have a balance for each currency.</p><p>A balance is not merely the amount you have; it could be more complicated and can have the following values :</p><table><thead><tr><th style="text-align:left;">Field</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;">currency</td><td style="text-align:left;">Currency</td></tr><tr><td style="text-align:left;">total</td><td style="text-align:left;">Returns the total amount of the currency in this balance</td></tr><tr><td style="text-align:left;">available</td><td style="text-align:left;">Returns the amount of the currency in this balance that is available to trade</td></tr><tr><td style="text-align:left;">frozen</td><td style="text-align:left;">Returns the frozen amount of the currency in this balance that is locked in a trading</td></tr><tr><td style="text-align:left;">loaned</td><td style="text-align:left;">Returns the loaned amount of the total currency in this balance that will be returned</td></tr><tr><td style="text-align:left;">borrowed</td><td style="text-align:left;">Returns the borrowed amount of the available currency in this balance that must be repaid</td></tr><tr><td style="text-align:left;">withdrawing</td><td style="text-align:left;">Returns the amount of the currency in this balance that is locked in withdrawal</td></tr><tr><td style="text-align:left;">depositing</td><td style="text-align:left;">Returns the amount of the currency in this balance that is locked in deposit</td></tr></tbody></table>',4);function l(r,i){return n}var c=t(a,[["render",l],["__file","what-is-an-account.html.vue"]]);export{c as default};
