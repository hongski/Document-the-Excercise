'Browser("Advantage Shopping").Page("Advantage Shopping").WebTable("PRODUCT NAME").GetCellData
Browser("Advantage Shopping").Page("Advantage Shopping").Link("SPEAKERS").Click

Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("buy_now").Click @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("quantity").Set DataTable("nItem", dtGlobalSheet) @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("buy_now").Click @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").Link("ShoppingCartLink").Click @@ script infofile_;_ZIP::ssf5.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebTable("Shopping Cart Table").Check CheckPoint("PRODUCT NAME") @@ script infofile_;_ZIP::ssf6.xml_;_


Browser("Advantage Shopping").Page("Advantage Shopping").WebTable("Shopping Cart Table").Output CheckPoint("PRODUCT NAME_2") @@ hightlight id_;_10000000_;_script infofile_;_ssf10.xml_;_
 @@ hightlight id_;_10000000_;_script infofile_;_ssf9.xml_;_

Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Remove").Click
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("WebElement").Check CheckPoint("WebElement") @@ script infofile_;_ZIP::ssf7.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").Link("HOME").Click @@ script infofile_;_ZIP::ssf8.xml_;_
