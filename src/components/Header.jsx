import CoverImage from '../images/cover-image.jpg';
import ProfileImage from '../images/profile-image.png';
import { FaTwitter, FaGithub } from 'react-icons/fa';

export const Header = () => {
  return (
    <header className="main-cover" style={{backgroundImage: `url(${CoverImage})`}}>
      {/* overlayはカバー画面の上に投下して表示される背景要素です。 */}
      <div className="overlay"></div>
      <div className="container">
        <div className="display-table">
          <div className="display-table-contents">
            {/* カバー画像 */}
            <div className="profile-thumb" style={{backgroundImage: `url(${ProfileImage})`}}></div>
            {/* 名前と肩書きはみなさんの名前や肩書きを自由に入れてください */}
            <h1 className="title-text">お兄さん</h1>
            <h3 className="title-text">いい人(ex.Engineer)</h3>
            <ul className="social-icons">
              <li className="icon-link">
                <a href="https://twitter.com/">
                  <FaTwitter color="white" size="2rem" />
                </a>
              </li>
              <li className="icon-link">
                <a href="https://github.com/">
                  <FaGithub color="white" size="2rem" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
