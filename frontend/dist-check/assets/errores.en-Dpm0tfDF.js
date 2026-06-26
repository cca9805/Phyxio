const e=`# Common Errors in Efficiency Analysis\r
\r
The study of energy efficiency in climate control is prone to misunderstandings due to the mixture of technical concepts, seasonal metrics, and economic factors. Below are the most frequent errors that can invalidate an audit or an investment decision.\r
\r
## Conceptual errors\r
\r
### Error 1: Believing that efficiency depends only on the equipment installed\r
**Why it seems correct**\r
It is common to think that if we buy the equipment with the best energy label (for example, A+++), savings are guaranteed. Advertising usually focuses on the machine's [[SCOP]] as an absolute value of quality.\r
\r
**Why it is incorrect**\r
Physically, consumption depends on the entire system. High-efficiency equipment installed in a house with serious air infiltration or poor insulation will have to work at maximum power constantly, leaving its optimal operating zone. Real efficiency is the product of equipment performance and the management of the home's [[seasonal thermal demand|Q_est]].\r
\r
**Detection signal**\r
It is observed when the user installs new equipment but their electric bill does not go down as expected, or when the equipment fails to maintain the setpoint temperature despite being theoretically powerful.\r
\r
**Conceptual correction**\r
You must see efficiency as a system of communicating vessels: to reduce consumption, you can improve the "faucet" (the equipment) or plug the "holes" (the insulation). Ignoring the [[demand|Q_est]] is ignoring half of the equation.\r
\r
**Contrast mini-example**\r
Installing a state-of-the-art heat pump in a house with open windows is less efficient than having an old stove in a perfectly insulated house. Real savings come from the balance between both parts.\r
\r
## Model errors\r
\r
### Error 2: Comparing savings without setting the same level of comfort\r
**Why it seems correct**\r
When comparing one year's consumption with the previous one, we usually look only at the total kWh figure or the euro amount, assuming that we "live the same."\r
\r
**Why it is incorrect**\r
Physical savings are only comparable if we keep the control variables constant. If in the [[base]] scenario the house was at 19 °C and in the [[new|nuevo]] scenario at 21 °C, the temperature increase will mask the technical improvement. The calculated [[percentage energy savings|Ahorro_pct]] will not be a faithful reflection of the system's improvement, but of a change in usage habits.\r
\r
**Detection signal**\r
It appears when the savings results are contradictory between similar months, or when the success of a measure is attributed to climatic luck instead of technical intervention.\r
\r
**Conceptual correction**\r
Efficiency analysis requires "normalization." Whenever you compare two scenarios, make sure the setpoint temperature and operating hours are identical.\r
\r
**Contrast mini-example**\r
Saying that you have saved 50% of energy this winter because you have spent less time at home is not an efficiency improvement; it is a reduction in service. Real efficiency is consuming less while doing the same.\r
\r
## Mathematical errors\r
\r
### Error 3: Using the nominal [[SCOP]] for guaranteed savings calculations\r
**Why it seems correct**\r
The manufacturer's data sheet gives a [[seasonal performance|SCOP]] value (for example, 4.5). It is tempting to multiply this number directly by the theoretical demand to obtain the [[seasonal electric consumption|E_est]].\r
\r
**Why it is incorrect**\r
The nominal [[SCOP]] is measured in laboratories under standardized testing conditions. In reality, factors such as dirt in the filters, the length of the refrigerant pipes, or the accumulation of frost on the outdoor unit reduce the effective performance. Using the maximum value leads to underestimating real consumption and overestimating economic savings.\r
\r
**Detection signal**\r
It is detected when the calculated investment payback period is much shorter than what the reality of the bills shows after the first year of use.\r
\r
**Conceptual correction**\r
Always apply a safety factor or "field correction" to the commercial [[SCOP]]. A discount of 15-20% off the catalog value usually offers a much closer estimate to actual physical behavior.\r
\r
**Contrast mini-example**\r
It's like a car's approved consumption: on the test track it spends 4 liters, but in a city with hills and traffic it spends 6. If you calculate your gasoline budget with 4 liters, you will run short in the middle of the month.\r
\r
## Interpretation errors\r
\r
### Error 4: Confusing energy savings with economic savings\r
**Why it seems correct**\r
If the system is more efficient and spends fewer kWh, it is automatically assumed that the bill in euros should go down in the same proportion.\r
\r
**Why it is incorrect**\r
The [[seasonal economic cost|C_est]] depends on energy but also on the market price. If during the year of the improvement the [[average energy price|precio_medio]] rises drastically, the user may pay the same or more than the previous year, despite having reduced their physical consumption. This creates the false sensation that the efficiency improvement has not worked.\r
\r
**Detection signal**\r
It manifests in the frustration of the user who, after investing in insulation, sees that their bill does not go down, ignoring that the price of electricity has risen 30% in the same period.\r
\r
**Conceptual correction**\r
Always separate technical analysis (energy) from financial analysis (money). Technical success is measured in kilowatt-hours, financial success in euros. Both are coupled by price, but respond to different causes.\r
\r
**Contrast mini-example**\r
You may have reduced your water consumption by half by installing efficient faucets, but if the municipal company doubles the price of the cubic meter, your bill will not go down. This does not mean the faucets do not work, but that the economic environment has changed.\r
\r
## Quick self-control rule\r
\r
To verify if your efficiency analysis is solid, apply this three-point checklist:\r
1. **Comfort Consistency**: Has the same interior temperature been maintained in both scenarios? If not, the [[percentage energy savings|Ahorro_pct]] calculation is not valid.\r
2. **Unit Coherence**: Have you correctly separated the thermal demand ([[Q_est]]) from the electrical consumption ([[E_est]])? Remember that the [[SCOP]] is the bridge between the two.\r
3. **Bill Validation**: Does the calculated [[seasonal economic cost|C_est]] match the sum of real bills within a reasonable margin? If the difference exceeds 15%, review the assumptions of your model.\r
`;export{e as default};
