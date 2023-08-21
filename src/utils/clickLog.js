import { clickLog } from '@stone/crown-design/utils';

export default function clickLogExtend(args) {
  clickLog({
    channel: 10001,
    nameInfo: {
      application_name: 'Recommend',
      application_version: 'Recommend',
    },
    ...args,
  });
}
