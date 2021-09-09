import styled from 'styled-components';

export const Card = styled.div`
  background-color: #1f2a48;
  padding: 2rem 1rem;
  border-radius: 15px;
  display: flex;
  gap: 0 2rem;

  @media screen and (max-width: 728px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const UserImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 3px solid #efefef;
  margin: auto;
`;

export const UserDetail = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const UserInfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media screen and (max-width: 728px) {
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;
  }
`;

export const NameBox = styled.div``;

export const UserFullName = styled.h2``;

export const UserName = styled.p`
  color: #0278fc;
`;

export const JoinDate = styled.p`
  font-weight: 500;
  margin-top: 5px;
  font-size: 18px;
`;

export const UserBio = styled.p`
  margin: 2rem 0;
`;

export const UserDetailCard = styled.div`
  background-color: #141c2f;
  border-radius: 15px;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
`;

export const UserRepo = styled.h3`
  display: flex;
  flex-direction: column;
  text-align: center;

  @media screen and (max-width: 728px) {
    font-size: 1rem;
  }
`;

export const UserFollower = styled.h3`
  display: flex;
  flex-direction: column;
  text-align: center;

  @media screen and (max-width: 728px) {
    font-size: 1rem;
  }
`;

export const UserFollowing = styled.h3`
  display: flex;
  flex-direction: column;
  text-align: center;

  @media screen and (max-width: 728px) {
    font-size: 1rem;
  }
`;

export const UserOtherDetail = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-between;
  width: 100%;
  margin-top: 2rem;
  gap: 1rem;
  align-items: flex-start;

  @media screen and (max-width: 728px) {
    grid-template-columns: 1fr;
  }
`;

export const UserLocation = styled.p`
  display: flex;
  align-items: flex-start;
  span {
    margin-left: 10px;
  }
`;

export const UserTwitter = styled.p`
  display: flex;
  align-items: center;
  span {
    margin-left: 10px;
  }
`;

export const UserWebsite = styled.p`
  display: flex;
  align-items: center;
  span {
    margin-left: 10px;
  }
`;

export const UserFacebook = styled.p`
  display: flex;
  align-items: center;
  span {
    margin-left: 10px;
  }
`;
