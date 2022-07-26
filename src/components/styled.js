import styled from "styled-components";

export const StyledHeader = styled.div`
  position: fixed;
  z-index: 1;
  background-color: white;
  top: 0;
  right: 0;
  width: 100vw;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  padding: 0 5rem;
  background-color: #15203f;
  color: white;

  @media screen and (max-width: 600px) {
    padding: 0 1rem;
  }
  div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    div {
      margin-left: 1rem;
      display: flex;
      align-items: center;
    }
  }
`;

export const StyledMainGrid = styled.div`
  margin-top: 8rem;
  width: 100%;
  padding: 0 4rem;

  display: grid;
  grid-template-columns: repeat(4, minmax(13rem, 15rem));
  grid-auto-rows: 13rem;
  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(4, minmax(13rem, 15rem));
    grid-auto-rows: 13rem;
  }
  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(3, minmax(13rem, 15rem));
    grid-auto-rows: 11rem;
  }
  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(2, minmax(13rem, 15rem));
    grid-auto-rows: 11rem;
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, minmax(13rem, 15rem));
    grid-auto-rows: 11rem;
  }
  gap: 1.2rem;
  justify-content: center;
`;

export const StyledItemContainer = styled.div`
  background: green;

  div:first-child {
    height: 70%;
    background: yellow;
  }
  div:last-child {
    height: 30%;
  }
`;

export const StyledPageUl = styled.ul`
  height: 3rem;

  margin: auto;
  margin-top: 2rem;
  margin-bottom: 3rem;
  padding: 0.1rem;

  background-color: rgba(0, 0, 0, 0.4);

  border-top: 3px solid #186ead;
  border-bottom: 3px solid #186ead;

  float: left;
  list-style: none;
  text-align: center;
  border-radius: 1rem;
`;

export const StyledPageLi = styled.li`
  width: 2rem;
  display: inline-block;
  font-size: 1.4rem;
  font-weight: 600;
  padding: 0.7rem;
  border-radius: 1rem;
  transition: all 0.2s linear;
  &:hover {
    cursor: pointer;
    color: white;
    background-color: rgba(38, 58, 108, 0.6);
  }
`;
export const StyledPostContainer = styled.div`
  margin: auto;
  margin-top: 8rem;
  margin-bottom: 10rem;
  border: 0.1rem solid rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  width: 50rem;
  box-shadow: rgba(0, 0, 0, 0.3) 0.4rem 0.4rem 4rem 0rem;
  .content__district {
    width: 30rem;
    margin: auto;

    display: flex;
    flex-direction: column;

    div:first-child {
      letter-spacing: 0.3rem;
      font-weight: bold;
      font-size: 2.5rem;
      text-align: start;
      margin: 2rem 0 1rem 0;
    }
  }

  .modified__btn__container {
    width: 30rem;
    margin: auto;
    display: flex;
    justify-content: space-around;
  }
  @media screen and (max-width: 850px) {
    width: 35rem;
    .content__district {
      width: 25rem;
    }
    .modified__btn__container {
      width: 25rem;
      font-size: 1rem;
      button {
        padding: 0.2rem;
      }
    }
  }
  @media screen and (max-width: 600px) {
    width: 22rem;
    .content__district {
      width: 15rem;
    }
  }
`;

export const StyledPostInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.7rem;
  border-radius: 1rem;

  .img__container {
    width: 30rem;
    margin: auto;
    margin-bottom: 2rem;

    img {
      width: 100%;
      border-radius: 1rem;
      object-fit: contain;
      transition: all 0.2s ease-in-out;
      &:hover {
        transform: scale(1.3);
        box-shadow: rgba(0, 0, 0, 0.2) 0.4rem 0.4rem 4rem 0.8rem;
      }
    }
  }
  .content__title {
    width: 30rem;

    margin: auto;
    margin-bottom: 2rem;

    font-size: 1.5rem;
    font-weight: 600;
    text-align: start;
  }
  .content__content {
    width: 30rem;

    margin: auto;
    margin-bottom: 2rem;

    font-size: 1.23rem;
    text-align: start;
    line-height: 1.6rem;
    white-space: pre-wrap;
  }
  @media screen and (max-width: 850px) {
    .content__content,
    .content__title,
    .img__container {
      width: 25rem;
    }
  }
  @media screen and (max-width: 600px) {
    .content__content,
    .content__title,
    .img__container {
      width: 15rem;
    }
  }
  .modified__btn__container {
    @media screen and (max-width: 850px) {
      width: 70%;
      flex-wrap: wrap;
    }
    @media screen and (max-width: 600px) {
      width: 70%;
      flex-wrap: wrap;
    }
  }
`;

export const StylePostBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
`;

export const CommentBox = styled.div`
  width: 50rem;
  margin: auto;
  margin-bottom: 1rem;

  border: 0.1rem solid rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.3) 0.4rem 0.4rem 1rem 0rem;
  padding: 1rem;

  .contentDetail {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.5rem;

    div:not(.contentDetail__timeStamp, .contentDetail__editBtn) {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .contentDetail__username {
      width: 30%;
      height: 3rem;
      font-size: 1.2rem;
      font-weight: 500;
    }

    .contentDetail__timeStamp {
      width: 25%;
      margin-left: -16rem;
      font-size: 0.8rem;
      font-weight: 600;
      font-style: italic;

      display: flex;
      align-items: center;
      justify-content: flex-start;
    }
    .contentDetail__editBtn {
      width: 30%;
      display: flex;
      justify-content: space-around;
      button {
        width: 5rem;
        height: 2rem;
      }
    }
  }
`;
