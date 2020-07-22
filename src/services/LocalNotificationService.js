import PushNotification from 'react-native-push-notification';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import { Platform } from 'react-native';

class LocalNotificationService {
  configure = (onOpenNotification) => {
    PushNotification.configure({
      // Called when Token is generated (iOS and Android)
      onRegister: function (token) {
        console.log("[LocalNotificationService] onRegister: ", token);
      },
      // Called when a remote is received or opened, or local notification is opened
      onNotification: function (notification) {
        console.log("[LocalNotificationService] onNotification: ", notification);
        if (!notification.data) return;
        notification.userInteraction = true;
        onOpenNotification(Platform.OS === 'ios' ? notification.data.item : notification.data);
        if (Platform.OS === 'ios') {
          notification.finish(PushNotificationIOS.FetchResult.NoData);
        }
      },
      permissions: {
        alert: true,
        badge: true,
        sound: true
      },
      popInitialNotification: true,
      requestPermissions: true
    })
  }
  unRegister = () => {
    PushNotification.unregister();
  }

  showNotification = (id, title, message, data = {}, options = {}) => {
    PushNotification.localNotification({
      ...this.buildAndroidNotification(id, title, message, data, options),
      ...this.buildIOSNotification(id, title, message, data, options),
      message,
      title: title || "",
      playSound: options.playSound || false,
      soundName: options.soundName || 'default',
      userInteraction: false
    })
  }

  buildAndroidNotification = (id, title, message, data = {}, options = {}) => ({
    id,
    autoCancel: true,
    largeIcon: options.largeIcon || "ic_launcher",
    smallIcon: options.smallIcon || "ic_notofication",
    bigText: message || "",
    subText: title || "",
    vibrate: options.vibrate || true,
    vibration: options.vibration || 300,
    priority: options.priority || "high",
    importance: options.importance || "high",
    data
  })

  buildIOSNotification = (id, title, message, data = {}, options = {}) => ({
    alertAction: options.alertAction || "view",
    category: options.category || "",
    userInfo: {
      id,
      item: data
    }
  })

  cancelAllLocalNotification = () => {
    if (Platform.OS === "ios") {
      PushNotificationIOS.removeAllDeliveredNotifications();
    } else {
      PushNotification.cancelAllLocalNotifications();
    }
  }

  removeDeliveredNotificationById = (notificationId) => {
    console.log("[LocalNotificationService] removeDeliveredNotificationById: ", notificationId);
    PushNotification.cancelLocalNotifications({ id: notificationId });
  }
}

export const localNotificationService = new LocalNotificationService();