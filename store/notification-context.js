import { createContext, useState, useEffect } from "react";


const NotificationContext = createContext({
  notification: null,
  showNotification: (notificationData) => { },
  hideNotification: () => { },
})


export const NotificationProvider = (props) => {
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    let timer
    if (notification && notification.status != "pending") {
      setTimeout(() => hideNotificationHandler(), 3000)
    } 
    return ()=> clearTimeout(timer)
  }, [notification])


  const hideNotificationHandler = () => {
    setNotification(null)
  }
  const showNotificationHandler = (notificationData) => {
    setNotification(notificationData)
  }

  const context = {
    notification,
    showNotification: showNotificationHandler,
    hideNotification: hideNotificationHandler,
  }
  return (
    <NotificationContext.Provider value={context}>
      {props.children}
    </NotificationContext.Provider>
  )
}

export default NotificationContext