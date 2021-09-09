import React from 'react';
import { FaBlog, FaLink, FaMapMarker, FaTwitter } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import {
  Card,
  UserImage,
  UserDetail,
  UserInfoBox,
  NameBox,
  UserFullName,
  UserName,
  JoinDate,
  UserBio,
  UserDetailCard,
  UserRepo,
  UserFollower,
  UserFollowing,
  UserOtherDetail,
  UserLocation,
  UserTwitter,
  UserWebsite,
  UserFacebook,
} from './DisplayBox.element';

function DisplayBox({ data }) {
  const MonthName = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const date = new Date(data.created_at);
  const joiningDate = `${date.getDate()} ${
    MonthName[date.getMonth()]
  } ${date.getFullYear()}`;

  return (
    <Card>
      <UserImage src={data.avatar_url} alt='' />
      <UserDetail>
        <UserInfoBox>
          <NameBox>
            <UserFullName>{data.name}</UserFullName>
            <UserName>@{data.login}</UserName>
          </NameBox>
          <JoinDate>Joined {joiningDate}</JoinDate>
        </UserInfoBox>
        <UserBio>{data.bio}</UserBio>
        <UserDetailCard>
          <UserRepo>
            Repos
            <span>{data.public_repos}</span>
          </UserRepo>
          <UserFollower>
            Followers
            <span>{data.followers}</span>
          </UserFollower>
          <UserFollowing>
            Following
            <span>{data.following}</span>
          </UserFollowing>
        </UserDetailCard>
        <UserOtherDetail>
          <IconContext.Provider
            value={{
              color: '#fff',
              size: '15px',
            }}
          >
            <UserLocation>
              <FaMapMarker />
              <span>{data.location}</span>
            </UserLocation>
            <UserTwitter>
              <FaTwitter />
              <span>@{data.twitter_username}</span>
            </UserTwitter>
            <UserWebsite>
              <FaLink />
              <span>{data.html_url}</span>
            </UserWebsite>
            <UserFacebook>
              <FaBlog />
              <span>{data.blog}</span>
            </UserFacebook>
          </IconContext.Provider>
        </UserOtherDetail>
      </UserDetail>
    </Card>
  );
}

export default DisplayBox;
