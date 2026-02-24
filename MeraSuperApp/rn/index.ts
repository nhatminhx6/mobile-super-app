import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';

import BookingApp from './apps/booking/BookingApp';
import BillingApp from './apps/billing/BillingApp';
import ProfileApp from './apps/profile/ProfileApp';

AppRegistry.registerComponent('miniapp.booking', () => BookingApp);
AppRegistry.registerComponent('miniapp.billing', () => BillingApp);
AppRegistry.registerComponent('miniapp.profile', () => ProfileApp);
