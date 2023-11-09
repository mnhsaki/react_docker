/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import {useIntl} from 'react-intl'
import {SidebarMenuItemWithSub} from './SidebarMenuItemWithSub'
import {SidebarMenuItem} from './SidebarMenuItem'

const SidebarMenuMain = () => {
  const intl = useIntl()

  return (
    <>
      <SidebarMenuItem
        to='/dashboard'
        icon='element-11'
        title={intl.formatMessage({id: 'MENU.DASHBOARD'})}
        fontIcon='bi-app-indicator'
      />
      {/* <SidebarMenuItem to='/builder' icon='switch' title='Layout Builder' fontIcon='bi-layers' /> */}
      {/* <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Crafted</span>
        </div>
      </div> */}
      {/* <SidebarMenuItemWithSub
        to='/crafted/pages'
        title='Pages'
        fontIcon='bi-archive'
        icon='element-plus'
      > */}
        {/* <SidebarMenuItemWithSub to='/crafted/pages/profile' title='Profile' hasBullet={true}>
          <SidebarMenuItem to='/crafted/pages/profile/overview' title='Overview' hasBullet={true} />
          <SidebarMenuItem to='/crafted/pages/profile/projects' title='Projects' hasBullet={true} />
          <SidebarMenuItem
            to='/crafted/pages/profile/campaigns'
            title='Campaigns'
            hasBullet={true}
          />
          <SidebarMenuItem
            to='/crafted/pages/profile/documents'
            title='Documents'
            hasBullet={true}
          />
          <SidebarMenuItem
            to='/crafted/pages/profile/connections'
            title='Connections'
            hasBullet={true}
          />
        </SidebarMenuItemWithSub> */}

        {/* <SidebarMenuItemWithSub to='/crafted/pages/wizards' title='Wizards' hasBullet={true}>
          <SidebarMenuItem
            to='/crafted/pages/wizards/horizontal'
            title='Horizontal'
            hasBullet={true}
          />
          <SidebarMenuItem to='/crafted/pages/wizards/vertical' title='Vertical' hasBullet={true} />
        </SidebarMenuItemWithSub>
      </SidebarMenuItemWithSub> */}
      {/* <SidebarMenuItemWithSub
        to='/crafted/accounts'
        title='Accounts'
        icon='profile-circle'
        fontIcon='bi-person'
      >
        <SidebarMenuItem to='/crafted/account/overview' title='Overview' hasBullet={true} />
        <SidebarMenuItem to='/crafted/account/settings' title='Settings' hasBullet={true} />
      </SidebarMenuItemWithSub> */}

      <SidebarMenuItemWithSub 
      to='/crafted/smsbroadcast' 
      title='SMS Broadcast'
      icon='sms'
      fontIcon='bi-person'>

      <SidebarMenuItem to='/smsbroadcast/quicksms' title='Quick SMS' hasBullet={true} />
      <SidebarMenuItem to='/smsbroadcast/groupsms' title='Group SMS' hasBullet={true} />
      <SidebarMenuItem to='/smsbroadcast/contactfilesms' title='Contact File SMS' hasBullet={true} />
      <SidebarMenuItem to='/smsbroadcast/senderid' title='Sender ID' hasBullet={true} />
      <SidebarMenuItem to='/smsbroadcast/smscampain' title='SMS Campain' hasBullet={true} />
      <SidebarMenuItem to='/smsbroadcast/smartsms' title='Smart SMS' hasBullet={true} />
      <SidebarMenuItem to='/smsbroadcast/smstemplete' title='SMS Templete' hasBullet={true} />

      </SidebarMenuItemWithSub>

     
      
      <SidebarMenuItemWithSub to='/contact&group' title='Contact&Group' fontIcon='bi-contactlist' icon='book'>
        <SidebarMenuItem to='/contact&group/contact_and_group' title='Contact&Group'  hasBullet={true} />
        <SidebarMenuItem to='/contactandgroup' title='Contact & Group' fontIcon='bi-phone' hasBullet={true} />
        
      </SidebarMenuItemWithSub>

      
      <SidebarMenuItem to='/smsfiltertext' title='SMS Filter Text'  hasBullet={true} />
      
      
      <SidebarMenuItemWithSub to='/users' title='Users' fontIcon='bi-person' icon='profile-circle'>
      <SidebarMenuItem to='/users/cloneuser' title='Clone User' hasBullet={true} />
      <SidebarMenuItem to='/users/createuser' title='Create User' hasBullet={true} />
      <SidebarMenuItem to='/users/userlist' title='User List' hasBullet={true} />
      </SidebarMenuItemWithSub>
      
      <SidebarMenuItemWithSub to='/pricelist' title='Price List' fontIcon='bi bi-list-task' icon='bi bi-list-columns-reverse'>
      <SidebarMenuItem to='/pricelist/price' title='Price' hasBullet={true} />
      </SidebarMenuItemWithSub>
      
      <SidebarMenuItemWithSub to='/livereports' title='Live Reports' fontIcon='bi bi-broadcast-pin' icon='bi bi-broadcast-pin'>
      <SidebarMenuItem to='/livereports/todaybroadcast' title='TodayBroadCast' hasBullet={true} />
      <SidebarMenuItem to='/livereports/todaysms' title='Today SMS' hasBullet={true} />
      <SidebarMenuItem to='/livereports/smstodayapi' title='SMS Today-API ' hasBullet={true} />
      <SidebarMenuItem to='/livereports/smstodayapireportdownload' title='SMS TodayAPI ReportDownload ' hasBullet={true} />
      <SidebarMenuItem to='/livereports/summerylogs' title='Summery Logs ' hasBullet={true} />
      </SidebarMenuItemWithSub>

      <SidebarMenuItemWithSub to='/monitoring' title='Monitoring' fontIcon='bi bi-diagram-3' icon='bi bi-diagram-3'>
      <SidebarMenuItem to='/monitoring/mnobalancenotifyList' title='MNOBalanceNotifyList' hasBullet={true} />
     
      <SidebarMenuItem to='/monitoring/balancenotificationlog' title='BalanceNotificationLog' hasBullet={true} />
      <SidebarMenuItem to='/monitoring/balancethreshold' title='Balance Threshold' hasBullet={true} />
      </SidebarMenuItemWithSub>

      <SidebarMenuItemWithSub to='/settings' title='Settings' fontIcon='bi bi-gear-wide-connected' icon='bi bi-gear-wide-connected'>
      <SidebarMenuItem to='/settings/logoupdates' title='Logo Updates' hasBullet={true} />
      </SidebarMenuItemWithSub>

      <SidebarMenuItemWithSub to='/archive' title='Archive' fontIcon='bi bi-file-earmark-spreadsheet' icon='bi bi-file-earmark-spreadsheet'>
      <SidebarMenuItem to='/archive/broadcasthistory' title='BroadCast History' hasBullet={true} />
      <SidebarMenuItem to='/archive/smshistory' title='SMS History' hasBullet={true} />
      <SidebarMenuItem to='/archive/smshistoryapi' title='SMS History-API' hasBullet={true} />
      <SidebarMenuItem to='/livereports/summerylogs' title='Summery Logs ' hasBullet={true} />
      <SidebarMenuItem to='/archive/archivedeliverylogreport' title='Archive Delivery LogReport ' hasBullet={true} />
      <SidebarMenuItem to='/archive/apireportdownload' title='API Report Download ' hasBullet={true} />
      <SidebarMenuItem to='/archive/panelreportdownload' title='Panel Report Download ' hasBullet={true} />
      </SidebarMenuItemWithSub>

      <SidebarMenuItemWithSub to='/billing/transactionreports' title='Billing' fontIcon='bi bi-reception-4' icon='bi bi-reception-4'>
      <SidebarMenuItem to='/billing/transactionreports/rechargefrom' title='Recharge Form' hasBullet={true} />
      <SidebarMenuItem to='/billing/transactionreports/rechargeto' title='Recharge To' hasBullet={true} />
      <SidebarMenuItem to='/billing/invoice/invoicecreate' title='Invoice Create' hasBullet={true} />
      <SidebarMenuItem to='/billing/invoice/invoicelist' title='Invoice List' hasBullet={true} />
      </SidebarMenuItemWithSub>

      <SidebarMenuItemWithSub to='/schedules' title='Schedules' fontIcon='bi bi-calendar-plus' icon='bi bi-calendar-plus'>
      <SidebarMenuItem to='/schedules/pending' title='Pending' hasBullet={true} />
      <SidebarMenuItem to='/schedules/send' title='Send' hasBullet={true} />
      </SidebarMenuItemWithSub>

      <SidebarMenuItemWithSub to='/developeroptions' title='Developer Options' fontIcon='bi bi-person-workspace' icon='bi bi-person-workspace'>
      <SidebarMenuItem to='/developeroptions/changepassword' title='Change Password' hasBullet={true} />
     
      </SidebarMenuItemWithSub>

      <SidebarMenuItemWithSub to='/summeryreport' title='Summery Reports' fontIcon='bi bi-telephone' icon='bi bi-telephone'>
      <SidebarMenuItem to='/summeryreport/opwisereport' title='Op Wise Report' hasBullet={true} />
      <SidebarMenuItem to='/summeryreport/senderwisereport' title='Sender Wise Report' hasBullet={true} />
      <SidebarMenuItem to='/summeryreport/opandSenderwisereport' title='OP & Senderwise Report' hasBullet={true} />
     
      </SidebarMenuItemWithSub>

      <SidebarMenuItemWithSub to='/SpamFilter' title='SpamFilter' fontIcon='bi bi-telephone' icon='bi bi-telephone'>
      <SidebarMenuItem to='/SpamFilter/spamfilter' title='Spam Filter' hasBullet={true} />
      </SidebarMenuItemWithSub>

      {/* <SidebarMenuItemWithSub to='/error' title='Errors' fontIcon='bi-sticky' icon='cross-circle'>
        <SidebarMenuItem to='/error/404' title='Error 404' hasBullet={true} />
        <SidebarMenuItem to='/error/500' title='Error 500' hasBullet={true} />
      </SidebarMenuItemWithSub> */}
      {/* <SidebarMenuItemWithSub
        to='/crafted/widgets'
        title='Widgets'
        icon='element-7'
        fontIcon='bi-layers'
      >
        <SidebarMenuItem to='/crafted/widgets/lists' title='Lists' hasBullet={true} />
        <SidebarMenuItem to='/crafted/widgets/statistics' title='Statistics' hasBullet={true} />
        <SidebarMenuItem to='/crafted/widgets/charts' title='Charts' hasBullet={true} />
        <SidebarMenuItem to='/crafted/widgets/mixed' title='Mixed' hasBullet={true} />
        <SidebarMenuItem to='/crafted/widgets/tables' title='Tables' hasBullet={true} />
        <SidebarMenuItem to='/crafted/widgets/feeds' title='Feeds' hasBullet={true} />
      </SidebarMenuItemWithSub> */}
      {/* <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Apps</span>
        </div>
      </div> */}
      {/* <SidebarMenuItemWithSub
        to='/apps/chat'
        title='Chat'
        fontIcon='bi-chat-left'
        icon='message-text-2'
      >
        <SidebarMenuItem to='/apps/chat/private-chat' title='Private Chat' hasBullet={true} />
        <SidebarMenuItem to='/apps/chat/group-chat' title='Group Chart' hasBullet={true} />
        <SidebarMenuItem to='/apps/chat/drawer-chat' title='Drawer Chart' hasBullet={true} />
      </SidebarMenuItemWithSub> */}
      {/* <SidebarMenuItem
        to='/apps/user-management/users'
        icon='abstract-28'
        title='User management'
        fontIcon='bi-layers'
      /> */}
      {/* <div className='menu-item'>
        <a
          target='_blank'
          className='menu-link'
          href={process.env.REACT_APP_PREVIEW_DOCS_URL + '/docs/changelog'}
        >
          <span className='menu-icon'>
            <KTIcon iconName='code' className='fs-2' />
          </span>
          <span className='menu-title'>Changelog {process.env.REACT_APP_VERSION}</span>
        </a>
      </div> */}
    </>
  )
}

export {SidebarMenuMain}
