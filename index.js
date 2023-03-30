/**
 * @format
 */
import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import notifee, { AndroidImportance } from '@notifee/react-native';
import messaging from "@react-native-firebase/messaging";

messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background index!');
    const channelId = await notifee.createChannel({
        id: 'musu_app_pushNotification',
        name: 'Important Notifications musu_app_pushNotification',
        importance: AndroidImportance.HIGH,
    });
    if (remoteMessage?.notification) {  // from firebase push
        remoteMessage.notification.title &&
            notifee.displayNotification({
                title: remoteMessage.notification.title,
                body: remoteMessage.notification.body,
                android: {
                    channelId,
                    importance: AndroidImportance.HIGH,
                },
                data: {
                    notify_type: remoteMessage?.data?.type == "article" ? "article" : ""
                }
            });
    } else {
        remoteMessage?.data && // sendbird push notication
            notifee.displayNotification({
                title: "Musu Food App",
                body: "You have a new message from your Musu Food App",
                android: {
                    channelId,
                    importance: AndroidImportance.HIGH,
                },
            });
    }
});
AppRegistry.registerComponent(appName, () => App);
