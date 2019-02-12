Browser("Advantage Shopping").Page("Advantage Shopping").Link("SPEAKERS").Click @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("buy_now").Click @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("quantity").Set DataTable("nItem", dtGlobalSheet) @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("buy_now").Click @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").Link("ShoppingCartLink").Click @@ script infofile_;_ZIP::ssf5.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebTable("PRODUCT NAME").Check CheckPoint("PRODUCT NAME") @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Remove").Click
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("WebElement").Check CheckPoint("WebElement") @@ script infofile_;_ZIP::ssf7.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").Link("HOME").Click @@ script infofile_;_ZIP::ssf8.xml_;_
