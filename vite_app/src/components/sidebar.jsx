import "./sidebar.css";

function SideBar() {
  const subs = [
    {
      id: 1,
      tile: "Nadir on the go",
      img: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201.png?raw=true",
      class: "new",
    },
    {
      id: 2,
      tile: "Coke Studio Bangla",
      img: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true",
      class: "new",
    },
    {
      id: 3,
      tile: "MKBHD",
      img: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(2).png?raw=true",
      class: "",
    },
    {
      id: 4,
      tile: "Figma",
      img: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(3).png?raw=true",
      class: "new",
    },
    {
      id: 5,
      tile: "ATC Andriod ToTo C...",
      img: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(4).png?raw=true",
      class: "",
    },
    {
      id: 6,
      tile: "Alux.com",
      img: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(5).png?raw=true",
      class: "new",
    },
  ];
  return (
    <>
      <section className="sidebar">
        <div className="logo">
          <div className="menu">
            <img
              src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/hambarger.png?raw=true"
              alt=""
            />
          </div>
          <div className="yt-logo">
            <img
              src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Youtube%20logo.png?raw=true"
              alt=""
            />
          </div>
        </div>
        <div className="home-option">
          <div className="home-item">
            <img
              src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/home.png?raw=true"
              alt=""
            />
            <p>Home</p>
          </div>
          <div className="home-item">
            <img
              src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/explore.png?raw=true"
              alt=""
            />
            <p>Explores</p>
          </div>
          <div className="home-item">
            <img
              src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/shorts.png?raw=true"
              alt=""
            />
            <p>Shorts</p>
          </div>
          <div className="home-item">
            <img
              src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/subscription.png?raw=true"
              alt=""
            />
            <p>Subscriptions</p>
          </div>
        </div>
        <div className="hr"></div>
        <div className="home-option">
          <div className="home-item">
            <img
              src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/library.png?raw=true"
              alt=""
            />
            <p>Library</p>
          </div>
          <div className="home-item">
            <img
              src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/history.png?raw=true"
              alt=""
            />
            <p>History</p>
          </div>
          <div className="home-item">
            <img
              src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/your_video.png?raw=true"
              alt=""
            />
            <p>Your videos</p>
          </div>
          <div className="home-item">
            <img
              src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/watch_later.png?raw=true"
              alt=""
            />
            <p>Watch later</p>
          </div>
          <div className="home-item">
            <img
              src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/liked.png?raw=true"
              alt=""
            />
            <p>Liked videos</p>
          </div>
          <div className="home-item">
            <img
              src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/down_arrow.png?raw=true"
              alt=""
            />
            <p>Show more</p>
          </div>
        </div>
        <div className="hr"></div>
        <div className="sub">
          <h6>SUBSCRIPTIONS</h6>
          <div className="sub-container">
            {subs.map((sub) => (
              <div key={sub.id} className="sub-item">
                <img src={sub.img} alt="" />
                <p>{sub.tile}</p>
                <div className={sub.class}></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default SideBar;