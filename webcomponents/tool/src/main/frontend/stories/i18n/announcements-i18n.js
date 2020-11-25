export let announcementsI18n = `
#Java code

java.NOTI_REQUIRED = High - All participants
java.NOTI_OPTIONAL = Low - Not received by those who have opted out
java.NOTI_NONE = None - No notification
java.permissions = Permissions
java.merge = Merge
java.reorder=Reorder
java.refresh=View

### (moot) java.alert.prbset = Permissions can not be set at this time because the site is already being edited. Close permissions in other tools before proceeding.
java.alert.youhave = You have to select the announcement first!
java.alert.pleasechoose = Please choose only one announcement at a time to edit!
java.alert.youdont = You don't have permission to edit this announcement!
java.alert.youneed = You need to fill in the title!
java.alert.youfill = You need to fill in the body of the announcement!
# {0} is the subject
java.alert.youpermi.subject = You don't have permissions to create this announcement - {0}
java.alert.youdel = you don't have permission to delete the messages.
# {0} is a reference
java.alert.youdelann.ref = you don't have permissions to delete this announcement - {0}
java.alert.youdelann2 = you don't have permissions to delete this announcement!
java.alert.thisitem = This item is being edited by another user. Please try again later.
java.alert.youacc.pes = You don't have permissions to access the message(s) - {0}
java.alert.thisis = This item is being edited by another user. Please try again later.
### (moot) java.alert.youcreate = you don't have permissions to create this announcement -
java.alert.youchoosegroup = You need to choose at least one group.
java.alert.cannotfindann = Message doesn't exist!
java.alert.nodates = You need to select a Beginning and/or Ending Date when specifying dates!
java.alert.baddates = You cannot specify an ending date before its release date!
java.alert.unknown = An unknown error has occurred.
java.alert.dupalias = This name has already been used
java.alert.customsize.number = Only {0} announcements can be displayed at a time!
java.alert.length = The length of alias cannot be greater than 99 characters

java.nownull = Now null
java.setting = Setting options for Announcements in worksite 
java.yes = Yes
java.no = No
# {0} is a PermissionException.toString()
java.youmess.pes = You don't have permissions to access the message(s) - {0}
#SAK-25942
#java.theann = the announcement
java.ann = announcement
java.set = Set permissions for Announcements in worksite 

#General Vm
# {0} is the alert message, as of 2012-07-13, it could be java.alert.youhave, java.alert.pleasechoose, java.alert.youdont, java.youmess.pes, java.alert.cannotfindann, java.alert.youacc.pes, java.alert.youneed, java.alert.youfill, java.alert.nodates, java.alert.baddates, java.alert.youchoosegroup, java.alert.youpermi.subject, java.alert.youdel, java.alert.youdelann.ref, java.alert.youdelann2, java.alert.thisitem, java.alert.thisis, java.alert.length, java.alert.dupalias, java.alert.unknown, java.alert.customsize or an error message from FormattedText.processFormattedText
gen.alert.message = Alert: {0}
gen.new = Add
gen.delete = Remove
gen.delete2 = Remove
gen.revise = Edit
gen.site = Site
gen.from = Saved By
gen.date = Modified Date
gen.releasedate = Beginning Date
gen.mod = Modified Date
gen.retractdate = Ending Date
gen.subject = Subject
gen.attach = attachment
# {0} is the announcement subject
gen.draft.subject = <span class="highlight">Draft - </span>  {0}
gen.save = Save
gen.draft = Draft
gen.update = Update
gen.cancel = Cancel
gen.clearSelections = Clear Selections
gen.first = First
# {0} is the pagesize
gen.previous.pagesize = Previous {0}
# {0} is the pagesize
gen.next.pagesize = Next {0}
gen.last = Last
gen.select.label = Choose page size
gen.listnavselect = To operate the combo box, first press Alt+Down Arrow to open it, and then use the up and down arrow keys to scroll through the options.
gen.assignmentlink = Assignment Link

gen.thereare = There are currently no announcements at this location.
gen.tablecaptionworksp = Table contains a list of announcements. It is five columns wide and each row contains a single announcement. Column one indicates if the announcement has an attachment, column two contains the title of the announcement, column three has the name of the author, column four shows the recipient, column five contains the date and time of publication.
gen.tablecaptionsite = Table contains a list of announcements. It is five or six columns wide and each row contains a single announcement. Column one indicates if the announcement has an attachment, column two contains the title of the announcement, column three has the name of the author, column four shows the recipient, column five contains the date and time of publication, column six, if present, contains a checkbox - selecting it will mean you want to remove this announcement. The following row will contain announcement text if site owner has set it to be so.
gen.tablecaptionsitebody = Table contains a list of announcements. Each announcement takes up two rows. The first row contains the announcement title and links to edit or delete if you have those permissions. Second row contains the text of the announcement.
gen.therearepublic = There are currently no public announcements at this location.
gen.therearegroup= There are currently no group announcements at this location. 
gen.sortby = Sort by subject
gen.sortbyasc = Sort by subject ascending
gen.sortbydesc = Sort by subject descending
### (moot) gen.sortsiteasc = Sort by site ascending
### (moot) gen.sortsitedesc = Sort by site descending
gen.sortchannel = Sort by originating site
gen.sortchanasc = Sort by originating site ascending
gen.sortchandesc = Sort by originating site descending
gen.sortbyauth = Sort by author
gen.sortbyauthasc = Sort by author ascending
gen.sortbyauthdesc = Sort by author descending
gen.sortbydate = Sort by modified date
gen.sortbydateasc = Sort by modified date ascending
gen.sortbydatedesc = Sort by modified date descending
gen.sortbyreleasedate = Sort by beginning date
gen.sortbyreleasedateasc = Sort by beginning date ascending
gen.sortbyreleasedatedesc = Sort by beginning date descending
gen.sortbyretractdate = Sort by ending date
gen.sortbyretractdateasc = Sort by ending date ascending
gen.sortbyretractdatedesc = Sort by ending date descending

### (moot) gen.sortbypub = Sort by public
### (moot) gen.sortbypubasc = Sort by visibility ascending
### (moot) gen.sortbypubdesc = Sort by visibility descending
gen.sortbyfor = Sort by audience
gen.sortbyforasc = Sort by audience ascending
gen.sortbyfordesc = Sort by audience descending
gen.newwindow = Opens in a new window

gen.includeattachments = This announcement includes attachments

gen.editdraft = Edit draft announcement
# {0} is the announcement subject
gen.editdraft.subject = Edit draft announcement {0}
# {0} is the announcement subject
gen.editann.subject = Edit announcement {0}
# {0} is the announcement subject
gen.viewann.subject = View announcement {0}
# {0} is the announcement subject
gen.removeann.subject = Remove announcement {0}

gen.visible = For
gen.remove_question = Remove?
gen.public = public
gen.selectremove = Select to remove
gen.announcements = Announcements
#SAK-9116: use parameterized phrase (done 3-28-08)
#   3 lines below (non-parameterized) can be removed
gen.viewing.phrase=Viewing {0} - {1} of {2} items
gen.viewing.days.phrase.brackets=(viewing announcements from the last {0} days)
gen.recopt = Recent Announcements Options
gen.show=show {0} items...

#Customize Vm
custom.display = Display Options
### (moot) custom.display2 =Announcement Display
custom.showbody = Show announcement body
custom.charbody = Characters in body
custom.about = Show about 
custom.dplimits = Display Limits
### (moot) custom.howwill = How will announcements display in the announcement list?
custom.number = Number of days in the past
custom.numbann = Number of announcements 
custom.options = Options

custom.sortab = Sortable table view
custom.sortabbod = Sortable table view with announcement body
custom.lisvie = List view with announcement body
custom.shofir = First 50 Characters
custom.shofirtwo =  First 100 Characters
custom.shoall = All

custom.setoptions = You are currently setting options for announcements.
custom.setoptionsrecent = You are currently setting options for recent announcements.

custom.rss_option.full = RSS Feed Options <i>public announcements only</i>
custom.rss_alias  = RSS Alias (40 chars max)
custom.rss_url    = RSS URL

#Deleting Vm
del.deleting = Deleting announcements...
del.areyou = Are you sure you want to delete the following announcements?
			
#Merging Vm
merge.list.summary=Table contains list of sites you can merge announcements from. Column 1: site title. Column 2: checkbox to select.
merge.select = Select what announcements you want to merge into this site.
merge.show = Show Announcements from Another Site
merge.showann = Show Announcements

#Metadata Vm
meta.title = Announcement
meta.public = Display to Non-Members
meta.message = Message
meta.attach = Attachments
### (moot) meta.noattach = No attachments ...
### (moot) meta.back = Back
meta.prev = Previous
meta.next = Next
meta.retlis = Return to List
meta.groups = Groups

#Preview Vm
pre.preview =Announcement Preview
pre.notif = Email Notification
pre.post = Post Announcement

#Revise Vm
revise.add = Post Announcement
revise.revise = Edit Announcement
revise.complete = Complete the form, then choose the appropriate button at the bottom.
revise.required.star = Required items marked with a <span class="reqStarInline">*</span>
revise.update = Update the form, then choose the appropriate button at the bottom.
revise.announce = Announcement
revise.announcement.body = Body
### (moot) revise.none = None

revise.subject = Announcement title


#Reorder Vm
reorder.title= Reorder Announcements
reorder.instruction.general=To reorder, drag and drop list items, or use the keyboard U and D keys, and then click Update.
reorder.instruction.input= You can also edit list order numbers.
reorder.instruction.general.hidden=Tab into list and hold Control key and use arrow keys to sort.
reorder.undo.last.label=Undo last
reorder.undo.all.label=Undo all
reorder.fail.valid.message=A number smaller than # please!

### (moot) revise.pview = Public view:
### (moot) revise.setto = Set to Yes at a higher level.
revise.attachments = Attachments
revise.notify = Email Notification
revise.attach = Attachment
revise.addatt = Add Attachments
revise.addrem = Add/remove attachments
### (moot) revise.displaynon = Display to Non-Members
revise.noattach = No Attachments Yet
revise.group.list.summary=Table contains list of groups. First will  contain checkboxes, second will contain the group name, third the group description. Header links can be used to sort.
revise.group.list.toggle=toggle select all
revise.group.list.title=Title
### (moot) revise.group.list.sorttitle=Sort by group title
### (moot) revise.group.list.sorttitleasc=Sort by group title ascending
### (moot) revise.group.list.sorttitledesc=Sort by group title descending
revise.group.list.desc=Description
### (moot) revise.group.list.sortdesc=Sort by group description
### (moot) revise.group.list.sortdescasc=Sort by group description ascending
### (moot) revise.group.list.sortdescdesc=Sort by group description descending

revise.notify_high = High - All participants
revise.notify_high_groups = High - All group members
revise.notify_low = Low - Not received by those who have opted out
revise.notify_none = None - No notification
revise.notify.ver_link = See revision history
revise.notify.short_high = High priority
revise.notify.short_low = Low priority
revise.notify.short_none = No notification
revise.notify.draft = None - saved as draft
revise.notify.ver_summary = Table contains history of revisions. Col 1: date revised; col 2: notification setting used when was revised; col 3: when announcement is set to display if display is delayed
revise.notify.ver_daterevisedtitle = Date revised
revise.notify.ver_typetitle = Notification setting
revise.notify.ver_datereleasedtitle = Availability setting
# {0} is a date + time
revise.notify.ver.dateds_future.date = Set to display and be sent on {0}
# {0} is a date + time
revise.notify.ver.dated_future.date = Set to display on {0}
#SAK-25955
#revise.savedraft = Save Draft
revise.savechanges = Save Changes
revise.preview = Preview

displayto.access = Access
displayto.public = This announcement is  <strong>publicly viewable</strong>
displayto.site = Only <strong>members of this site</strong> can see this announcement
displayto.selected = Display this announcement <strong>to selected groups</strong> only

view.label = View
view.all = All
view.public = Public
view.bygroup = By group

range.public = public
range.allgroups = site

group = Group
groups = Groups

### (moot) displayLimitWarning_1=This screen is only showing you the
### (moot) displayLimitWarning_2=newest announcements because your view limit is set to
### (moot) displayLimitWarning_3=. To correct this click the options button.

#SAK-25956
## labels used in date selection widget in VM_chef_library.vm, as well as time selects
#dateselectionwidget.day = Select day
#dateselectionwidget.month = Select month
#dateselectionwidget.year = Select year
#dateselectionwidget.hour = Select hour
#dateselectionwidget.minute = Select minute
#dateselectionwidget.ampm = Select AM or PM
## months (used in chef_dateselectionwidget macro in VM_chef_library.vm)
#jan = JAN
#feb = FEB
#mar = MAR
#apr = APR
#may = MAY
#jun = JUN
#jul = JUL
#aug = AUG
#sep = SEP
#oct = OCT
#nov = NOV
#dec = DEC
#calendar.title = Popup date selector

avail.title= Availability
avail.show.withtips= Show <span>- (<strong>Post</strong> and display this announcement immediately)</span>
avail.hide.withtips= Hide <span>- (<strong>Draft mode</strong> - Do not display this announcement at this time)</span>
avail.specify.withtips=Specify Dates <span>- (<strong>Choose when</strong> this announcement will be displayed)</span>
avail.release = Beginning
avail.retract = Ending

widget_date=Date:
#SAK-25960
#widget_time=Time:

# EntityProvider properties
announcement=Represents announcements for a given site (including merged announcements) or all announcements for a user. Also includes Message Of The Day and public announcements. There are two optional URL parameters available: 'n' to set the total number of announcements returned, and 'd' to set the number of days in the past to retrieve announcements for. If these parameters are not set, they are retrieved from the tool configuration, or the standard defaults of n=3 and d=10 are used. For example /announcements/site/mercury.json?n=20&amp;d=100 will retrieve up to 20 total announcements for up to 100 days ago.
announcement.action.site=Retrieve the announcements for a site. If you are not logged in, you will only receive the public announcements for this site.
announcement.action.user=Retrieve the announcements for the current user. If you are not logged in, you will only receive the MOTD announcements.
announcement.action.motd=Retrieve only the MOTD announcements.
announcement.action.msg=Retrieve an announcement based on the path used by the announcements service internally, ie /announcement/msg/{siteId}/{channelId}/{announcementId}. Context is normally the site ID and the channelId is normally "main" unless there are multiple channels in a site. For example /announcement/msg/21b1984d-af58-43da-8583-f4adee769aa2/main/5641323b-761a-4a4d-8761-688f4928141b
announcement.action.message=Retrieve an announcement based on the given siteId and messageId. eg /announcement/message/{siteId}/{msgId}

# this is used by the EntityProvider to set the title of the MOTD site when MOTD messages are retrieved. You may never use it since the response is parsed.
motd.title = Message Of The Day

announcement.edit.selectall = Select All Groups
announcement.edit.selectone = You must select at least one group
announcement.edit.allselected = All the groups are selected
announcement.edit.groupsselected = groups selected
announcement.edit.searchgroup = Search group

## permission descriptions for announcement tool
perm-annc.new=Create announcements
perm-annc.read=Read announcements
perm-annc.revise.any=Edit all announcements
perm-annc.revise.own=Edit own announcements
perm-annc.delete.any=Delete all announcements
perm-annc.delete.own=Delete own announcements
perm-annc.read.drafts=Read all draft announcements
perm-annc.all.groups=Access all group announcements

## Dashboard widget i18n
#title=Announcements
viewing=(viewing announcements from the last 10 days)
site=Site
search=Search
title=Title
site=Site
view=View
sort_by_title_tooltip=Sort by title
sort_by_site_tooltip=Sort by title
widget_title=Announcements
`;
