import { Profile } from '../Profile/Profile';
import { Statistics } from '../Statistics/Statistics'
import { FriendList } from '../FriendList/FriendList'

import user from '../path/user.json';
import dataStatic from '../path/data.json';
import friendsInfo from '../path/friends';


export const App = () => {
  return (
    <div
      style={{
        height: '100vh',

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
      <Statistics
        title="Upload stats"
        data={dataStatic}
      />
      <FriendList friends={friendsInfo} />
    </div>
  );
};
