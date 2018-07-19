import moment from 'moment';
import 'moment/locale/pl';

export default function (value, format = 'LLLL') {
  return moment(value).format(format);
}
