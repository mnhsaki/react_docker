import {lazy, FC, Suspense} from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import {MasterLayout} from '../../_metronic/layout/MasterLayout'
import TopBarProgress from 'react-topbar-progress-indicator'
import {DashboardWrapper} from '../pages/dashboard/DashboardWrapper'
import {MenuTestPage} from '../pages/MenuTestPage'
import {getCSSVariableValue} from '../../_metronic/assets/ts/_utils'
import {WithChildren} from '../../_metronic/helpers'
import BuilderPageWrapper from '../pages/layout-builder/BuilderPageWrapper'

import { GroupSMS } from '../modules/SMSBroadCast/GroupSMS'
import { ContactFileSMS } from '../modules/SMSBroadCast/ContactFileSMS'
import { SmartSMS } from '../modules/SMSBroadCast/SmartSMS'
import { SMSTemplete } from '../modules/SMSBroadCast/SMSTemplete'
import { QuickSMS } from '../modules/SMSBroadCast/QuickSMS'
import ContactAndGroup from '../modules/ContactAndGroup'
import SmsFilterText from '../modules/SmsFilterText'
import CloneUser from '../modules/Users/CloneUser'
import CreateUser from '../modules/Users/CreateUser'
import UserList from '../modules/Users/UserList'
import Price from '../modules/PriceList/Price'
import TodayBroadCast from '../modules/LiveReports/TodayBroadCast'
import TodaySMS from '../modules/LiveReports/TodaySMS'
import SMSTodayAPI from '../modules/LiveReports/SMSTodayAPI'
import SMSTodayAPIReportDownload from '../modules/LiveReports/SMSTodayAPIReportDownload'
import SummeryLogs from '../modules/LiveReports/SummeryLogs'
import MNOBalanceNotifyList from '../modules/Monitoring/MNOBalanceNotifyList'
import BalanceNotificationLog from '../modules/Monitoring/BalanceNotificationLog'
import BalanceThreshold from '../modules/Monitoring/BalanceThreshold'
import LogoUpload from '../modules/Settings/LogoUpdates'
import BroadCastHistory from '../modules/Archive/BroadCastHistory'
import SMSHistory from '../modules/Archive/SMSHistory'
import SMSHistoryAPI from '../modules/Archive/SMSHistoryAPI'
import ArchiveDeliveryLogReport from '../modules/Archive/ArchiveDeliveryLogReport'
import APIReportDownload from '../modules/Archive/APIReportDownload'
import PanelReportDownload from '../modules/Archive/PanelReportDownload'
import RechargeFrom from '../modules/Billing/TransactionReports/RechargeFrom'
import RechargeTo from '../modules/Billing/TransactionReports/RechargeTo'
import InvoiceCreate from '../modules/Billing/Invoice/InvoiceCreate'
import InvoiceList from '../modules/Billing/Invoice/InvoiceList'
import Send from '../modules/Schedules/Send'
import Pending from '../modules/Schedules/Pending'
import ChangePassword from '../modules/DeveloperOptions/ChangePassword'
import OpwiseReport from '../modules/SummeryReport/OpwiseReport'
import SenderwiseReport from '../modules/SummeryReport/SenderwiseReport'
import OPandSenderwiseReport from '../modules/SummeryReport/OPandSenderwiseReport'
import { SMSCampain } from '../modules/SMSBroadCast/SMSCampain'
import SpamFilter from '../modules/SpamFilter/SpamFilter'
import SenderId from '../modules/SMSBroadCast/SenderId'








const PrivateRoutes = () => {
  const ProfilePage = lazy(() => import('../modules/profile/ProfilePage'))
  const WizardsPage = lazy(() => import('../modules/wizards/WizardsPage'))
  const AccountPage = lazy(() => import('../modules/accounts/AccountPage'))
  const WidgetsPage = lazy(() => import('../modules/widgets/WidgetsPage'))
  const ChatPage = lazy(() => import('../modules/apps/chat/ChatPage'))
  const UsersPage = lazy(() => import('../modules/apps/user-management/UsersPage'))

  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after success login/registartion */}
        <Route path='auth/*' element={<Navigate to='/dashboard' />} />
        {/* Pages */}
        <Route path='dashboard' element={<DashboardWrapper />} />
        <Route path='builder' element={<BuilderPageWrapper />} />
        <Route path='menu-test' element={<MenuTestPage />} />
        {/* Lazy Modules */}
        <Route
          path='crafted/pages/profile/*'
          element={
            <SuspensedView>
              <ProfilePage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/pages/wizards/*'
          element={
            <SuspensedView>
              <WizardsPage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/widgets/*'
          element={
            <SuspensedView>
              <WidgetsPage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/account/*'
          element={
            <SuspensedView>
              <AccountPage />
            </SuspensedView>
          }
        />
        <Route
        path='crafted/smsbroadcast/quicksms/*'
        element={
          <SuspensedView>
            <QuickSMS />
          </SuspensedView>
        }>
         
        </Route>
        <Route
        path='crafted/smsbroadcast/groupsms/*'
        element={
          <SuspensedView>
            <GroupSMS />
          </SuspensedView>
        }>
         
        </Route>
        <Route
        path='crafted/smsbroadcast/contactfilesms/*'
        element={
          <SuspensedView>
            <ContactFileSMS />
          </SuspensedView>
        }>
         
        </Route>
        <Route
        path='crafted/smsbroadcast/senderid/*'
        element={
          <SuspensedView>
            <SenderId/>
          </SuspensedView>
        }>
         
        </Route>
        <Route
        path='crafted/smsbroadcast/smscampain/*'
        element={
          <SuspensedView>
            <SMSCampain />
          </SuspensedView>
        }>
         
        </Route>
        <Route
        path='crafted/smsbroadcast/smartsms/*'
        element={
          <SuspensedView>
            <SmartSMS />
          </SuspensedView>
        }>
         
        </Route>
        <Route
        path='crafted/smsbroadcast/*'
        element={
          <SuspensedView>
            <SMSTemplete />
          </SuspensedView>
        }>
         
        </Route>
         
        <Route
        path='crafted/contact&group/*'
        element={
          <SuspensedView>
           
          </SuspensedView>
        }>
         
        </Route>
        <Route
        path='crafted/contactAndgroup/*'
        element={
          <SuspensedView>
           <ContactAndGroup/>
          </SuspensedView>
        }>
         
        </Route>

        <Route
        path='crafted/smsfiltertext/*'
        element={
          <SuspensedView>
           <SmsFilterText/>
          </SuspensedView>
        }>

        </Route>
        <Route
        path='crafted/users/userlist/*'
        element={
          <SuspensedView>
            <UserList />
          </SuspensedView>
        }>
         
        </Route>
        <Route
        path='crafted/users/cloneuser/*'
        element={
          <SuspensedView>
            <CloneUser />
          </SuspensedView>
        }>
         
        </Route>
        <Route
        path='crafted/users/createuser/*'
        element={
          <SuspensedView>
            <CreateUser />
          </SuspensedView>
        }>
         
        </Route>
        <Route
        path='crafted/pricelist/price/*'
        element={
          <SuspensedView>
            <Price />
          </SuspensedView>
        }>
         
        </Route>

        <Route
        path='crafted/livereports/todaybroadcast/*'
        element={
          <SuspensedView>
            <TodayBroadCast />
          </SuspensedView>
        }>
         
        </Route>
        <Route
        path='crafted/livereports/todaysms/*'
        element={
          <SuspensedView>
            <TodaySMS />
          </SuspensedView>
        }>
         
        </Route>
        <Route
        path='crafted/livereports/smstodayapi/*'
        element={
          <SuspensedView>
            <SMSTodayAPI />
          </SuspensedView>
        }>
         
        </Route>
        <Route
        path='crafted/livereports/smstodayapireportdownload/*'
        element={
          <SuspensedView>
            <SMSTodayAPIReportDownload />
          </SuspensedView>
        }>
         
        </Route>
        <Route
        path='crafted/livereports/summerylogs/*'
        element={
          <SuspensedView>
            <SummeryLogs />
          </SuspensedView>
        }>
         
        </Route>
        <Route
        path='crafted/Monitoring/mnobalancenotifylist/*'
        element={
          <SuspensedView>
            <MNOBalanceNotifyList />
          </SuspensedView>
        }>
         
        </Route>
        <Route
        path='crafted/Monitoring/balancethreshold/*'
        element={
          <SuspensedView>
            <BalanceThreshold />
          </SuspensedView>
        }>
         
        </Route>
        <Route
        path='crafted/Monitoring/balancenotificationlog/*'
        element={
          <SuspensedView>
            <BalanceNotificationLog />
          </SuspensedView>
        }>
         
        </Route>

        <Route
        path='crafted/Settings/logoupdates/*'
        element={
          <SuspensedView>
            <LogoUpload />
          </SuspensedView>
        }>
         
        </Route>

        <Route
        path='crafted/Archive/broadcasthistory/*'
        element={
          <SuspensedView>
            <BroadCastHistory />
          </SuspensedView>
        }>
         
        </Route>

        <Route
        path='crafted/Archive/smshistory/*'
        element={
          <SuspensedView>
            <SMSHistory />
          </SuspensedView>
        }>
         
        </Route>

        <Route
        path='crafted/Archive/smshistoryapi/*'
        element={
          <SuspensedView>
            <SMSHistoryAPI />
          </SuspensedView>
        }>
         
        </Route>
        <Route
        path='crafted/Archive/archivedeliverylogreport/*'
        element={
          <SuspensedView>
            <ArchiveDeliveryLogReport />
          </SuspensedView>
        }>
         
        </Route>
        <Route
        path='crafted/Archive/apireportdownload/*'
        element={
          <SuspensedView>
            <APIReportDownload />
          </SuspensedView>
        }>
         
        </Route>
        <Route
        path='crafted/Archive/panelreportdownload/*'
        element={
          <SuspensedView>
            <PanelReportDownload/>
          </SuspensedView>
        }>
         
        </Route>
        <Route
        path='crafted/Billing/TransactionReports/rechargefrom/*'
        element={
          <SuspensedView>
            <RechargeFrom/>
          </SuspensedView>
        }>
         
        </Route>
        <Route
        path='crafted/Billing/TransactionReports/rechargeto/*'
        element={
          <SuspensedView>
            <RechargeTo/>
          </SuspensedView>
        }>
         
        </Route>
        <Route
        path='crafted/Billing/Invoice/invoicecreate/*'
        element={
          <SuspensedView>
            <InvoiceCreate/>
          </SuspensedView>
        }>
         
        </Route>
        <Route
        path='crafted/Billing/Invoice/invoicelist/*'
        element={
          <SuspensedView>
            <InvoiceList/>
          </SuspensedView>
        }>
         
        </Route>

        
        <Route
        path='crafted/Schedules/send/*'
        element={
          <SuspensedView>
            <Send/>
          </SuspensedView>
        }>
         
        </Route>
        
        <Route
        path='crafted/Schedules/pending/*'
        element={
          <SuspensedView>
            <Pending/>
          </SuspensedView>
        }>
         
        </Route>
        <Route
        path='crafted/Schedules/pending/*'
        element={
          <SuspensedView>
            <Pending/>
          </SuspensedView>
        }>
         
        </Route>

        <Route
        path='crafted/DeveloperOptions/changepassword/*'
        element={
          <SuspensedView>
            <ChangePassword/>
          </SuspensedView>
        }>
         
        </Route>
        <Route
        path='crafted/SummeryReport/opwisereport/*'
        element={
          <SuspensedView>
            <OpwiseReport/>
          </SuspensedView>
        }>
         
        </Route>
        <Route
        path='crafted/SummeryReport/senderwisereport/*'
        element={
          <SuspensedView>
            <SenderwiseReport/>
          </SuspensedView>
        }>
         
        </Route>
        <Route
        path='crafted/spamFilter/*'
        element={
          <SuspensedView>
            <SpamFilter/>
          </SuspensedView>
        }>
         
        </Route>
        <Route
        path='crafted/SummeryReport/opandSenderwisereport/*'
        element={
          <SuspensedView>
            <OPandSenderwiseReport/>
          </SuspensedView>
        }>
         
        </Route>
        

        



        <Route
          path='apps/chat/*'
          element={
            <SuspensedView>
              <ChatPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/user-management/*'
          element={
            <SuspensedView>
              <UsersPage />
            </SuspensedView>
          }
        />
        {/* Page Not Found */}
        <Route path='*' element={<Navigate to='/error/404' />} />
      </Route>
    </Routes>
  )
}

const SuspensedView: FC<WithChildren> = ({children}) => {
  const baseColor = getCSSVariableValue('--bs-primary')
  TopBarProgress.config({
    barColors: {
      '0': baseColor,
    },
    barThickness: 1,
    shadowBlur: 5,
  })
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>
}

export {PrivateRoutes}
