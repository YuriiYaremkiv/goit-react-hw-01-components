import { Profile } from '../Profile/Profile';
import { Statistics } from '../Statistics/Statistics';
import { FriendList } from '../FriendList/FriendList';
import { TransactionHistory } from '../TransactionHistory/TransactionHistory';

import user from '../path/user.json';
import dataStatic from '../path/data.json';
import friendsInfo from '../path/friends';
import transactionsInfo from '../path/transactions';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" data={dataStatic} />
      <FriendList friends={friendsInfo} />
      <TransactionHistory transactions={transactionsInfo} />
    </div>
  );
};
