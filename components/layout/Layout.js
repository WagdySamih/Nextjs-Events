import { useContext } from 'react'
import Header from './Header'
import Notification from '../ui/Notification'
import NotificationContext from '../../store/notification-context'
const Layout = ({ children }) => {

  const notificationCtx = useContext(NotificationContext);
  const activeNotification = notificationCtx.notification;
  return (
    <>
      <Header />
      {children}
      {activeNotification &&
        <Notification
          title={activeNotification.title}
          message={activeNotification.message}
          status={activeNotification.status}
        />}

    </>
  )
}
export default Layout