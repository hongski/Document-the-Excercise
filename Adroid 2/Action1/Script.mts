
'If count is zero, output will be no items
        If Device("Device").App("Advantage Shopping").MobileObject("imageViewMenu").Exist Then
            Device("Device").App("Advantage Shopping").MobileObject("imageViewMenu").Tap
        'If count is 1, output will be "There is 1 item.".        
        'If count is greater than 1, output will be "There are {count} items.", where {count} is replaced by the value of count. 
        Else
            wait(20)
            Device("Device").App("Advantage Shopping").MobileLabel("Settings").Check CheckPoint("Settings")
            Device("Device").App("Advantage Shopping").MobileObject("imageViewMenu").Tap
        End If


'Device("Device").App("Advantage Shopping").MobileLabel("Settings").Check CheckPoint("Settings")
'Device("Device").App("Advantage Shopping").MobileObject("imageViewMenu").Tap
'Device("Device").App("Advantage Shopping").MobileObject("design_navigation_view").Select 0
Device("Device").App("Advantage Shopping").MobileLabel("HOME").Tap

Device("Device").App("Advantage Shopping").MobileLabel("Advantage").Check CheckPoint("Advantage")
Device("Device").App("Advantage Shopping").MobileObject("imageViewCategory").Check CheckPoint("imageHeadphones")
Device("Device").App("Advantage Shopping").MobileObject("imageViewMenu").Tap

'Device("Device").App("Advantage Shopping").MobileObject("design_navigation_view").Select 0
Device("Device").App("Advantage Shopping").MobileLabel("HOME_2").Tap
Device("Device").App("Advantage Shopping").MobileObject("imageViewMenu").Tap

'Device("Device").App("Advantage Shopping").MobileObject("design_navigation_view").Select 0

Device("Device").App("Advantage Shopping").MobileLabel("LOGIN").Tap
Device("Device").App("Advantage Shopping").MobileObject("imageViewBack").Tap
