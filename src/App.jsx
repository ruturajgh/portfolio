
import { useEffect, useRef } from 'react'
import './App.css'

function App() {

  const ref = useRef(null)
  const loadingbar = useRef(null)
  const loadingBorder = useRef(null)
  const pageRef = useRef(null)
  const avatarRef = useRef(null)
  const avatarRefMain = useRef(null)
  const delimiterRef = useRef(null)
  const about = useRef(null)
  const aboutContainer = useRef(null)
  const p1 = useRef(null)
  const p2 = useRef(null)

  const technologies = useRef(null)
  const technologiesHead = useRef(null)
  const techIcons = useRef(null)

  const nameRef = useRef(null)
  const mainH1 = useRef(null)
  const mainH2 = useRef(null)
  const mainRef = useRef(null)

  const postsContainer = useRef(null)
  const posts = useRef(null)
  const postContent = useRef(null)

  const connectRef = useRef(null)
  const linksRef = useRef(null)
  const connectIcon = useRef(null)

  async function LoadingBar() {
    const border = loadingBorder.current;
    const bar = loadingbar.current;
    const page = pageRef.current;

    if (!border || !bar || !page) {
      throw new Error('One or more required refs are not initialized');
    }

    // Set initial styles before animation
    border.style.opacity = '1';
    border.style.width = '400px';
    border.style.height = 'auto';
    border.style.maxWidth = '100%';

    try {
      // Animate the loading border
      await border.animate(
        [
          { opacity: 0, width: '0px' },
          { opacity: 1, width: '400px' }
        ],
        { duration: 400, fill: 'forwards' }
      ).finished;

      // Animate the loading bar inside
      await bar.animate(
        [
          { width: '10px' },
          { width: '395px' }
        ],
        { duration: 1000, fill: 'forwards' }
      ).finished;

      // Animate the page transition
      await page.animate(
        [
          { opacity: 1, transform: 'scale(1)' },
          { opacity: 0, transform: 'scale(2)' }
        ],
        { duration: 500, fill: 'forwards', delay: 400 }
      ).finished;

      // Final style update
      page.style.display = 'none';
    } catch (err) {
      console.error('Animation sequence error:', err);
    }
  }

  function AvatarIconAnimate() {
    return new Promise((res, rej) => {
      const rectA = avatarRef.current.getBoundingClientRect();
      const rectB = avatarRefMain.current.getBoundingClientRect();
      const centerA = {
        x: rectA.left + rectA.width / 2,
        y: rectA.top + rectA.height / 2,
      };

      const centerB = {
        x: rectB.left + rectB.width / 2,
        y: rectB.top + rectB.height / 2,
      };

      // Delta from A to B
      const deltaX = centerB.x - centerA.x - 28;
      const deltaY = centerB.y - centerA.y - 28;

      avatarRef.current.animate(
        [{ opacity: 0 },
        { opacity: 1 },
        ], { duration: 500 }
      ).finished.then(() => {

        avatarRef.current.style.opacity = 1
        avatarRef.current.animate(
          [
            { translateX: 0, translateY: 0, height: '300px', width: '300px' },
            { border: '3px solid yellow', height: '50px', width: '50px', transform: `translate(${deltaX}px, ${deltaY}px)` }
          ],
          {
            duration: 1000, easing: 'cubic-bezier(1, 0, .7, 1)', // more dramatic ease-in
            fill: 'forwards'
          }
        ).finished.then(() => {



          avatarRef.current.style.width = '50px'
          avatarRef.current.style.height = '50px'
          avatarRef.current.style.display = 'none'
          avatarRefMain.current.style.opacity = 1
          avatarRef.current.style.border = '3px solid yellow'
          res()
        });

      })
      return
    })
  }

  async function setup() {
    const delimiter = delimiterRef.current;
    const name = nameRef.current;
    const aboutEl = about.current;

    if (!delimiter || !name || !aboutEl) {
      throw new Error('Missing one or more required refs.');
    }

    // Animate delimiter
    await delimiter.animate(
      [
        { opacity: 0, width: '0px' },
        { opacity: 1, width: '100%' }
      ],
      { duration: 500, fill: 'forwards' }
    ).finished;

    // Finalize delimiter styles explicitly (optional)
    delimiter.style.width = '100%';
    delimiter.style.opacity = '1';
    // Animate name
    await name.animate(
      [
        { opacity: 0 },
        { opacity: 1 }
      ],
      { duration: 500, fill: 'forwards' }
    ).finished;

    name.style.display = '';


    await aboutEl.animate(
      [
        { opacity: 0, },
        { opacity: 1, }
      ],
      { duration: 500, fill: 'forwards', delay: 500 }
    ).finished;

    aboutEl.style.opacity = '1';


    // Animate "p1"
    await p1.current.animate(
      [{ opacity: 0 }, { opacity: 1 }],
      { duration: 500, fill: 'forwards', delay: 500 }
    ).finished;
    p1.current.style.opacity = 1;

    // Animate "p2"
    await p2.current.animate(
      [{ opacity: 0 }, { opacity: 1 }],
      { duration: 500, fill: 'forwards', delay: 500 }
    ).finished;
    p2.current.style.opacity = 1;

    await aboutContainer.current.animate(
      [{ scale: 1 }, { scale: .7 }],
      { duration: 500, fill: 'forwards', delay: 500 }
    ).finished;
    p2.current.style.opacity = 1;

  }

  async function tech() {
    technologies.current.style.display = ''

    await technologies.current.animate([
      { height: '0px' },
      { height: '150px' }
    ], { duration: 500 }).finished
    technologies.current.style.height = '150px'


    await technologiesHead.current.animate([
      { opacity: 0, fontSize: '2rem' }, { opacity: 1, fontSize: '2rem' }
    ], { duration: 500 }).finished
    technologiesHead.current.style.opacity = 1

    await technologiesHead.current.animate([
      { fontSize: '2rem' }, { opacity: 1, fontSize: '1.5em' }
    ], { duration: 500 }).finished

    techIcons.current.style.display = 'flex'

    techIcons.current.style.flexWrap = 'nowrap'
    await techIcons.current.animate([
      { opacity: 0 }, { opacity: 1, }
    ], { duration: 500 }).finished

    techIcons.current.style.height = '100px'
  }
  async function stuffPosts() {
    await postsContainer.current.animate([
      { height: '0px' },
      { height: '230px' },
    ], { duration: 400 }).finished

    postsContainer.current.style.height = '230px'

    posts.current.style.display = ''
    await posts.current.animate([
      { opacity: 0, fontSize: '2rem' },
      { opacity: 1, fontSize: '2rem' },
    ], { duration: 500 }).finished

    posts.current.style.opacity = 1

    await posts.current.animate([
      { fontSize: '2rem' },
      { fontSize: '1.5em' },
    ], { duration: 500 }).finished
    postContent.current.style.display = 'flex'
    postContent.current.style.opacity = '0'
    await postContent.current.animate([
      { opacity: 0 }, { opacity: 1 }
    ], { duration: 500, delay: 500 }).finished

    postContent.current.style.opacity = 1
  }

  async function main() {
    mainRef.current.style.display = 'flex'
    mainRef.current.style.opacity = 1
    await mainRef.current.animate([{
      height: '0px',
    }, { height: '300px' }], { duration: 400 }).finished

    mainRef.current.style.height = '300px'

    mainH1.current.style.display = ''
    await mainH1.current.animate([
      { opacity: 0 }, { opacity: 1 }, { opacity: 1 }, { opacity: 0 }
    ], { duration: 2000 }).finished

    mainH1.current.style.display = 'none'

    mainH2.current.style.display = ''
    await mainH2.current.animate([
      { opacity: 0 }, { opacity: 1 }, { opacity: 1 }, { opacity: 0 }
    ], { duration: 2000 }).finished

    mainH2.current.style.display = 'none'
  }

  async function connect() {
    connectRef.current.style.display = 'flex'

    const avatar = avatarRefMain.current;
    const target = connectIcon.current;

    if (avatar && target) {
      const avatarRect = avatar.getBoundingClientRect();
      const targetRect = target.getBoundingClientRect();

      const deltaX = targetRect.left - avatarRect.left;
      const deltaY = targetRect.top - avatarRect.top;

      // Optional: set avatar to position absolute if it's not already
      avatar.style.position = 'absolute';
      avatar.style.left = `${avatarRect.left}px`;
      avatar.style.top = `${avatarRect.top}px`;
      avatar.style.margin = '0'; // to avoid layout shift

      // Animate using web.animate
      await avatar.animate(
        [
          { transform: 'translate(0, 0)' },
          { transform: `translate(${deltaX}px, ${deltaY}px)`, height: '300px', width: '300px', border: '12px solid yellow' },
        ],
        {
          duration: 500,
          easing: 'ease-in-out',
          fill: 'forwards',
        }
      ).finished
    }



    await connectRef.current.animate([
      { opacity: 0 }, { opacity: 1 }
    ], { duration: 1000 }).finished

    await linksRef.current.animate(
      [{ opacity: 0 }, { opacity: 1 }], { duration: 500 }
    ).finished
    linksRef.current.style.opacity = 1

  }
  useEffect(() => {
    if (!ref.current) return
    const el = ref.current

    el.animate([
      { opacity: 0, scale: 1.5 },
      { opacity: 1, scale: 1 }
    ],
      { duration: 400 }).finished.then(() => {

        LoadingBar()
          .then(AvatarIconAnimate)
          .then(setup)
          .then(tech)
          .then(stuffPosts)
          .then(main)
          .then(connect)
      })

  }, [ref.current])

  return (
    <>
      <div style={{
        display: 'flex',
        flexDirection: "column",
        placeItems: 'center',
        minWidth: '320px',
        height: window.innerHeight
      }}
        ref={pageRef}>
        <div style={{
          margin: 'auto'
        }}>
          <div ref={ref}>
            <h1>loading</h1>
          </div>
          <div ref={loadingBorder} style={{
            opacity: 0, overflow: 'hidden', padding: '.2rem',
            border: '1px solid yellow', borderRadius: '24px'
          }}>
            <div ref={loadingbar} style={{
              background: 'white', width: "10px",
              padding: '.2rem', background: "yellow", borderRadius: '24px'
            }}></div>
          </div></div >
      </div>

      <img ref={avatarRef} width={300} style={{ opacity: 0, border: '12px solid yellow', position: 'absolute', top: ' 50%', left: '50%', transform: 'translate(-50%, -50%)', borderRadius: 300, }} height={300} src="1745994170713.jpeg" alt="avatar icon" />
      <div style={{ padding: '1rem', minHeight: window.innerHeight - 50, display: 'flex', flexDirection: 'column' }}>
        <div style={{ width: 'full', display: 'flex', justifyContent: 'space-between' }}>
          <div style={{
            display: 'flex'
          }}>
            <span ref={nameRef} style={{
              margin: 'auto ', fontSize: '24px',
              display: 'none'
            }}>@ruturajgh</span>
          </div>
          <img ref={avatarRefMain} width={50} style={{ opacity: 0, borderRadius: 300, border: '3px solid yellow ' }} height={50} src="1745994170713.jpeg" alt="avatar icon" />
        </div>
        <div>

        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div ref={delimiterRef} style={{ width: 0, opacity: 0, background: 'gray', padding: '.05rem', borderRadius: '.2rem', margin: '1rem 0 ' }}></div>
        </div>


        <div ref={mainRef} style={{ display: 'none', margin: '3rem', height: '0px', justifyContent: 'center', alignItems: 'center', }}>
          <div ref={connectRef} style={{ display: 'none', justifyContent: 'center' }}>
            <div ref={connectIcon} style={{ width: 300, opacity: 0, height: 300, borderRadius: '50%', border: '12px solid yellow', overflow: 'hidden', marginLeft: 'auto' }}>
              <img
                src="1745994170713.jpeg"
                alt="avatar icon"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>

            <div
              ref={linksRef}
              style={{
                width: '150px',
                opacity: '0',
                textAlign: 'left',
                margin: 'auto auto auto 2rem',
              }}
            >
              <h3 style={{ borderBottom: '2px solid yellow', width: 'min-content', display: 'flex' }}>
                🔗 <a target="_blank" style={{ color: 'white', textDecoration: 'none' }} href="https://www.linkedin.com/in/ruturajgh/">
                  LinkedIn
                </a>
              </h3>
              <h3 style={{ borderBottom: '2px solid yellow', width: 'min-content', marginLeft: '1rem', display: 'flex' }}>
                🖥️ <a target="_blank" style={{ color: 'white', textDecoration: 'none' }} href="https://dev.to/ruturajgh">
                  Dev.to
                </a>
              </h3>
              <h3 style={{ borderBottom: '2px solid yellow', width: 'min-content', marginLeft: '1rem', display: 'flex' }}>
                📸 <a target="_blank" style={{ color: 'white', textDecoration: 'none' }} href="https://www.instagram.com/ruturajx5/">
                  Instagram
                </a>
              </h3>
              <h3 style={{ borderBottom: '2px solid yellow', width: 'min-content', display: 'flex' }}>
                ✉️ <a target="_blank" style={{ color: 'white', textDecoration: 'none' }} href="mailto:ruturajghodekar@yahoo.com">
                  Mail
                </a>
              </h3>
            </div>

          </div>

          <h2 style={{ display: 'none' }} ref={mainH2}>like to connect? </h2>
          <h2 style={{ display: 'none' }} ref={mainH1}>
            and i suck at designing stuff(learning),
            <br />  but i can build stuff.</h2>

        </div>

        <div ref={postsContainer} style={{ height: 0, overflow: 'hidden' }}>
          <h2 style={{ display: 'none' }} ref={posts}> i love sharing over the internet</h2>
          <div ref={postContent} style={{
            display: "none",
            gap: '1rem', flexWrap: 'wrap', justifyContent: 'center'
          }}>
            <a href="https://dev.to/ruturajgh/inside-a-emoji-picker-react-state-events-and-ui-patterns-4a13" target="_blank"  >
              <img width={200} height={150} style={{ borderRadius: '.6rem', overflow: "hidden", objectFit: 'cover', objectPosition: 'top left' }} src="blogpost.png" />
            </a>
            <a href="https://dev.to/ruturajgh/inside-a-emoji-picker-react-state-events-and-ui-patterns-4a13" target="_blank"  >
              <img width={200} height={150} style={{ borderRadius: '.6rem', overflow: "hidden", objectFit: 'cover', objectPosition: 'top left' }} src="linked1.png" />
            </a>    <a href="https://dev.to/ruturajgh/inside-a-emoji-picker-react-state-events-and-ui-patterns-4a13" target="_blank"  >
              <img width={200} height={150} style={{ borderRadius: '.6rem', overflow: "hidden", objectFit: 'cover', objectPosition: 'top left' }} src="linked2.png" />
            </a>
          </div>
        </div>

        <div style={{ display: 'none' }} ref={technologies}>
          <h2 ref={technologiesHead} style={{ opacity: 0, marginTop: '3rem' }}>techologies i work with</h2>
          <div style={{ display: 'none', margin: 'auto', height: 0, gap: '.6rem', flexWrap: 'wrap', justifyContent: "center" }} ref={techIcons}>
            <svg

              xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
              <path fill="#80deea" d="M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16	c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z"></path><path fill="#80deea" d="M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5	c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4	c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9	c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z"></path><path fill="#80deea" d="M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19	c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2	c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z"></path><circle cx="24" cy="24" r="4" fill="#80deea"></circle>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
              <path fill='yellow' d="M 6.667969 4 C 5.207031 4 4 5.207031 4 6.667969 L 4 43.332031 C 4 44.792969 5.207031 46 6.667969 46 L 43.332031 46 C 44.792969 46 46 44.796875 46 43.332031 L 46 6.667969 C 46 5.207031 44.796875 4 43.332031 4 Z M 6.667969 6 L 43.332031 6 C 43.703125 6 44 6.296875 44 6.667969 L 44 43.332031 C 44 43.703125 43.703125 44 43.332031 44 L 6.667969 44 C 6.296875 44 6 43.703125 6 43.332031 L 6 6.667969 C 6 6.296875 6.296875 6 6.667969 6 Z M 23 23 L 23 35.574219 C 23 37.503906 22.269531 38 21 38 C 19.671875 38 18.75 37.171875 18.140625 36.097656 L 15 38 C 15.910156 39.925781 18.140625 42 21.234375 42 C 24.65625 42 27 40.179688 27 36.183594 L 27 23 Z M 35.453125 23 C 32.046875 23 29.863281 25.179688 29.863281 28.042969 C 29.863281 31.148438 31.695313 32.617188 34.449219 33.789063 L 35.402344 34.199219 C 37.140625 34.960938 38 35.425781 38 36.734375 C 38 37.824219 37.171875 38.613281 35.589844 38.613281 C 33.707031 38.613281 32.816406 37.335938 32 36 L 29 38 C 30.121094 40.214844 32.132813 42 35.675781 42 C 39.300781 42 42 40.117188 42 36.683594 C 42 33.496094 40.171875 32.078125 36.925781 30.6875 L 35.972656 30.28125 C 34.335938 29.570313 33.625 29.109375 33.625 27.964844 C 33.625 27.039063 34.335938 26.328125 35.453125 26.328125 C 36.550781 26.328125 37.253906 26.792969 37.90625 27.964844 L 40.878906 26.058594 C 39.625 23.84375 37.878906 23 35.453125 23 Z"></path>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
              <path fill="#f50057" d="M24.5,32.88c0,0-0.01-0.04-0.02-0.12C24.5,32.84,24.5,32.88,24.5,32.88z"></path><path fill="#f50057" d="M27.375,8.625c0,0-0.375-1.375,0.125-2.5s0.5-1.875-0.5-3c2-0.125,2.75,1.25,2.75,1.25l0.025,0.159 c0.118,0.766-0.278,1.494-0.946,1.888C28.219,6.781,27.563,7.437,27.375,8.625z"></path><path fill="#f50057" d="M41.63,36.24c0.02-0.21,0.34-3.04-0.38-4.36c-1.5,4.24-3,8.12-7.37,10.87 c0.62-1.25,1.62-3.25,2.62-6.25c-3,4-9,8-13.5,8.25c3.04-1.68,4.75-3.84,5.5-5.25c0,0-1.75,0.5-3.88,0.75 c2.88-1.75,4.88-4.87,3.88-9.75c-2,6.25-4.75,8.25-8.38,8.62c-3.62,0.38-6.87-1.5-6.87-1.5l1.25-0.12c0,0-3.25-2.5-2.12-5.75 c0.05-0.16,0.11-0.31,0.18-0.45c0.82-1.82,3.61-0.9,3.32,1.07v0.01c0,0,0.87,2.37,3.24,1.74c0.76-1.24,1.26-2.5,1.26-2.5l0.37,1.63 c0,0,1.75-0.75,1.75-2.13c1.5,0.57,1.88,1.28,1.97,1.59c-0.26-1.4-2.52-11.03-14.49-10.89l-2.09,1.94 c-0.14,0.13-0.36,0.02-0.34-0.16L7.71,22l0.14-0.14c-0.04,0.01-0.09,0-0.13,0L7.71,22l-0.82,0.76c-0.14,0.13-0.36,0.02-0.34-0.16 l0.1-1.02c-1.74-0.74-1.9-2.7-1.9-2.7S2.58,18.27,3.5,15.5C4,14,5.2,13.85,5.71,13.97c0.65,0.15,1.32,0.16,1.94-0.09 c0.9-0.36,2.05-1.05,2.85-2.38C12,9,14.25,8,19.12,8c6.45,0,9.05,1.98,9.35,2.22c-0.18-0.21-1.27-1.66,1.03-3.84 c2.27-2.16,1.86-2.67,1.77-2.75c0.34,0.1,4.75,1.6,5.23,7.37c0.5,6-6.5,7.25-6.5,7.25s9,1.75,9.12-6.75 c1.76,1,5.38,4.75,5.88,12.88C45.49,32.26,41.84,36.03,41.63,36.24z"></path><path fill="#f50057" d="M7.85,21.86L7.71,22l0.01-0.14C7.76,21.86,7.81,21.87,7.85,21.86z"></path><path fill="#f50057" d="M7.85,21.86L7.71,22l0.01-0.14C7.76,21.86,7.81,21.87,7.85,21.86z"></path>
            </svg>   <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
              <path fill='white' d="M20,23.474V31.5c0,0.828-0.672,1.5-1.5,1.5S17,32.328,17,31.5v-13c0-0.659,0.431-1.241,1.062-1.435 c0.627-0.19,1.314,0.049,1.682,0.596l0.249,0.37L20,18l15.234,22.546C40.524,36.947,44,30.88,44,24c0-11.046-8.954-20-20-20 S4,12.954,4,24s8.954,20,20,20c3.082,0,5.99-0.718,8.597-1.963L20,23.474z M28,16.5c0-0.828,0.672-1.5,1.5-1.5s1.5,0.672,1.5,1.5 v12.79l-3-4.304V16.5z"></path>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
              <path fill='orange' d="M 46.792969 22.089844 L 27.910156 3.207031 C 27.109375 2.402344 26.054688 2 25 2 C 23.945313 2 22.890625 2.402344 22.089844 3.207031 L 18.355469 6.941406 L 22.976563 11.5625 C 24.511719 10.660156 26.511719 10.855469 27.828125 12.171875 C 29.144531 13.488281 29.335938 15.488281 28.433594 17.019531 L 32.976563 21.5625 C 34.511719 20.660156 36.511719 20.855469 37.828125 22.171875 C 39.390625 23.734375 39.390625 26.265625 37.828125 27.828125 C 36.265625 29.390625 33.734375 29.390625 32.171875 27.828125 C 30.855469 26.511719 30.660156 24.511719 31.5625 22.976563 L 27.019531 18.433594 C 26.695313 18.625 26.355469 18.765625 26 18.855469 L 26 31.140625 C 27.722656 31.585938 29 33.136719 29 35 C 29 37.210938 27.210938 39 25 39 C 22.789063 39 21 37.210938 21 35 C 21 33.136719 22.277344 31.585938 24 31.140625 L 24 18.855469 C 23.332031 18.683594 22.695313 18.351563 22.171875 17.828125 C 20.855469 16.511719 20.664063 14.511719 21.566406 12.980469 L 16.941406 8.355469 L 3.207031 22.089844 C 1.597656 23.695313 1.597656 26.304688 3.207031 27.910156 L 22.089844 46.792969 C 22.890625 47.597656 23.945313 48 25 48 C 26.054688 48 27.109375 47.597656 27.910156 46.792969 L 46.792969 27.910156 C 48.402344 26.304688 48.402344 23.695313 46.792969 22.089844 Z"></path>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
              <path fill="#00acc1" d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598 c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152 c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24 L12,24z"></path>
            </svg>
            <svg width={100} height={100} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill-rule="evenodd" clip-rule="evenodd" fill="#439934" d="M88.038 42.812c1.605 4.643 2.761 9.383 3.141 14.296.472 6.095.256 12.147-1.029 18.142-.035.165-.109.32-.164.48-.403.001-.814-.049-1.208.012-3.329.523-6.655 1.065-9.981 1.604-3.438.557-6.881 1.092-10.313 1.687-1.216.21-2.721-.041-3.212 1.641-.014.046-.154.054-.235.08l.166-10.051-.169-24.252 1.602-.275c2.62-.429 5.24-.864 7.862-1.281 3.129-.497 6.261-.98 9.392-1.465 1.381-.215 2.764-.412 4.148-.618z" /><path fill-rule="evenodd" clip-rule="evenodd" fill="#45A538" d="M61.729 110.054c-1.69-1.453-3.439-2.842-5.059-4.37-8.717-8.222-15.093-17.899-18.233-29.566-.865-3.211-1.442-6.474-1.627-9.792-.13-2.322-.318-4.665-.154-6.975.437-6.144 1.325-12.229 3.127-18.147l.099-.138c.175.233.427.439.516.702 1.759 5.18 3.505 10.364 5.242 15.551 5.458 16.3 10.909 32.604 16.376 48.9.107.318.384.579.583.866l-.87 2.969z" /><path fill-rule="evenodd" clip-rule="evenodd" fill="#46A037" d="M88.038 42.812c-1.384.206-2.768.403-4.149.616-3.131.485-6.263.968-9.392 1.465-2.622.417-5.242.852-7.862 1.281l-1.602.275-.012-1.045c-.053-.859-.144-1.717-.154-2.576-.069-5.478-.112-10.956-.18-16.434-.042-3.429-.105-6.857-.175-10.285-.043-2.13-.089-4.261-.185-6.388-.052-1.143-.236-2.28-.311-3.423-.042-.657.016-1.319.029-1.979.817 1.583 1.616 3.178 2.456 4.749 1.327 2.484 3.441 4.314 5.344 6.311 7.523 7.892 12.864 17.068 16.193 27.433z" /><path fill-rule="evenodd" clip-rule="evenodd" fill="#409433" d="M65.036 80.753c.081-.026.222-.034.235-.08.491-1.682 1.996-1.431 3.212-1.641 3.432-.594 6.875-1.13 10.313-1.687 3.326-.539 6.652-1.081 9.981-1.604.394-.062.805-.011 1.208-.012-.622 2.22-1.112 4.488-1.901 6.647-.896 2.449-1.98 4.839-3.131 7.182a49.142 49.142 0 01-6.353 9.763c-1.919 2.308-4.058 4.441-6.202 6.548-1.185 1.165-2.582 2.114-3.882 3.161l-.337-.23-1.214-1.038-1.256-2.753a41.402 41.402 0 01-1.394-9.838l.023-.561.171-2.426c.057-.828.133-1.655.168-2.485.129-2.982.241-5.964.359-8.946z" /><path fill-rule="evenodd" clip-rule="evenodd" fill="#4FAA41" d="M65.036 80.753c-.118 2.982-.23 5.964-.357 8.947-.035.83-.111 1.657-.168 2.485l-.765.289c-1.699-5.002-3.399-9.951-5.062-14.913-2.75-8.209-5.467-16.431-8.213-24.642a4498.887 4498.887 0 00-6.7-19.867c-.105-.31-.407-.552-.617-.826l4.896-9.002c.168.292.39.565.496.879a6167.476 6167.476 0 016.768 20.118c2.916 8.73 5.814 17.467 8.728 26.198.116.349.308.671.491 1.062l.67-.78-.167 10.052z" /><path fill-rule="evenodd" clip-rule="evenodd" fill="#4AA73C" d="M43.155 32.227c.21.274.511.516.617.826a4498.887 4498.887 0 016.7 19.867c2.746 8.211 5.463 16.433 8.213 24.642 1.662 4.961 3.362 9.911 5.062 14.913l.765-.289-.171 2.426-.155.559c-.266 2.656-.49 5.318-.814 7.968-.163 1.328-.509 2.632-.772 3.947-.198-.287-.476-.548-.583-.866-5.467-16.297-10.918-32.6-16.376-48.9a3888.972 3888.972 0 00-5.242-15.551c-.089-.263-.34-.469-.516-.702l3.272-8.84z" /><path fill-rule="evenodd" clip-rule="evenodd" fill="#57AE47" d="M65.202 70.702l-.67.78c-.183-.391-.375-.714-.491-1.062-2.913-8.731-5.812-17.468-8.728-26.198a6167.476 6167.476 0 00-6.768-20.118c-.105-.314-.327-.588-.496-.879l6.055-7.965c.191.255.463.482.562.769 1.681 4.921 3.347 9.848 5.003 14.778 1.547 4.604 3.071 9.215 4.636 13.813.105.308.47.526.714.786l.012 1.045c.058 8.082.115 16.167.171 24.251z" /><path fill-rule="evenodd" clip-rule="evenodd" fill="#60B24F" d="M65.021 45.404c-.244-.26-.609-.478-.714-.786-1.565-4.598-3.089-9.209-4.636-13.813-1.656-4.93-3.322-9.856-5.003-14.778-.099-.287-.371-.514-.562-.769 1.969-1.928 3.877-3.925 5.925-5.764 1.821-1.634 3.285-3.386 3.352-5.968.003-.107.059-.214.145-.514l.519 1.306c-.013.661-.072 1.322-.029 1.979.075 1.143.259 2.28.311 3.423.096 2.127.142 4.258.185 6.388.069 3.428.132 6.856.175 10.285.067 5.478.111 10.956.18 16.434.008.861.098 1.718.152 2.577z" /><path fill-rule="evenodd" clip-rule="evenodd" fill="#A9AA88" d="M62.598 107.085c.263-1.315.609-2.62.772-3.947.325-2.649.548-5.312.814-7.968l.066-.01.066.011a41.402 41.402 0 001.394 9.838c-.176.232-.425.439-.518.701-.727 2.05-1.412 4.116-2.143 6.166-.1.28-.378.498-.574.744l-.747-2.566.87-2.969z" /><path fill-rule="evenodd" clip-rule="evenodd" fill="#B6B598" d="M62.476 112.621c.196-.246.475-.464.574-.744.731-2.05 1.417-4.115 2.143-6.166.093-.262.341-.469.518-.701l1.255 2.754c-.248.352-.59.669-.728 1.061l-2.404 7.059c-.099.283-.437.483-.663.722l-.695-3.985z" /><path fill-rule="evenodd" clip-rule="evenodd" fill="#C2C1A7" d="M63.171 116.605c.227-.238.564-.439.663-.722l2.404-7.059c.137-.391.48-.709.728-1.061l1.215 1.037c-.587.58-.913 1.25-.717 2.097l-.369 1.208c-.168.207-.411.387-.494.624-.839 2.403-1.64 4.819-2.485 7.222-.107.305-.404.544-.614.812-.109-1.387-.22-2.771-.331-4.158z" /><path fill-rule="evenodd" clip-rule="evenodd" fill="#CECDB7" d="M63.503 120.763c.209-.269.506-.508.614-.812.845-2.402 1.646-4.818 2.485-7.222.083-.236.325-.417.494-.624l-.509 5.545c-.136.157-.333.294-.398.477-.575 1.614-1.117 3.24-1.694 4.854-.119.333-.347.627-.525.938-.158-.207-.441-.407-.454-.623-.051-.841-.016-1.688-.013-2.533z" /><path fill-rule="evenodd" clip-rule="evenodd" fill="#DBDAC7" d="M63.969 123.919c.178-.312.406-.606.525-.938.578-1.613 1.119-3.239 1.694-4.854.065-.183.263-.319.398-.477l.012 3.64-1.218 3.124-1.411-.495z" /><path fill-rule="evenodd" clip-rule="evenodd" fill="#EBE9DC" d="M65.38 124.415l1.218-3.124.251 3.696-1.469-.572z" /><path fill-rule="evenodd" clip-rule="evenodd" fill="#CECDB7" d="M67.464 110.898c-.196-.847.129-1.518.717-2.097l.337.23-1.054 1.867z" /><path fill-rule="evenodd" clip-rule="evenodd" fill="#4FAA41" d="M64.316 95.172l-.066-.011-.066.01.155-.559-.023.56z" /></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"
              fill="#f63f22" viewBox="0 0 24 24" >
              <path d="M19.26 4.65c-1.86-2.66-5.53-3.45-8.18-1.76L6.42 5.86c-1.27.8-2.15 2.1-2.41 3.58-.22 1.23-.03 2.5.55 3.61-.4.6-.67 1.28-.8 2-.27 1.51.08 3.06.97 4.31 1.86 2.66 5.53 3.45 8.18 1.76l4.66-2.97c1.27-.8 2.15-2.1 2.41-3.58.22-1.23.03-2.5-.55-3.61.4-.6.67-1.28.8-2 .27-1.51-.08-3.06-.97-4.31m-1.33 3.81c-.03.15-.06.29-.11.44l-.09.27-.24-.18c-.55-.41-1.17-.71-1.82-.91l-.17-.05.02-.17c.02-.25-.05-.49-.19-.69-.27-.38-.74-.56-1.2-.44-.1.03-.2.07-.29.13L9.18 9.83a.99.99 0 0 0-.26 1.43c.27.38.74.56 1.2.44.1-.03.2-.07.29-.13l1.78-1.13c.29-.19.61-.33.95-.42 1.5-.39 3.09.2 3.97 1.47.54.75.75 1.68.59 2.59-.16.89-.69 1.67-1.45 2.15l-4.66 2.97c-.29.19-.61.33-.95.42-1.5.39-3.09-.2-3.97-1.47a3.41 3.41 0 0 1-.48-3.03l.09-.27.24.18c.55.41 1.17.71 1.82.91l.17.05-.02.17c-.02.25.05.49.19.69.27.38.74.56 1.2.44.1-.03.2-.07.29-.13l4.66-2.97a1 1 0 0 0 .44-.65c.05-.27-.02-.55-.18-.78-.27-.38-.74-.56-1.2-.44-.1.03-.2.07-.29.13l-1.78 1.13c-.29.19-.61.33-.95.42-1.5.39-3.09-.2-3.97-1.47a3.4 3.4 0 0 1-.59-2.59c.16-.89.69-1.67 1.45-2.15l4.66-2.97c.29-.19.61-.33.95-.42 1.5-.39 3.09.2 3.97 1.47.54.75.75 1.68.59 2.59"></path>
            </svg>    </div>
        </div>

        <div ref={aboutContainer} style={{
          flexGrow: 1, display: 'flex'
        }}>
          <div
            style={{
              flexGrow: 1, margin: 'auto'
            }}>
            <h1 ref={about} style={{ opacity: 0, fontSize: '2rem' }}>about me</h1>
            <div style={{
              margin: '0 auto',
              maxminth: 600
            }}>
              <p

                style={{
                  fontSize: '1.5rem',
                  opacity: 0
                }}
                ref={p1} ><span style={{
                  borderBottom: '2px solid yellow',
                  borderRadius: '2px'
                }}>2 years</span> into Development, I love learning new technologies and understanding how systems work under the hood. </p>
              <p
                style={{
                  fontSize: '1.5rem',
                  opacity: 0
                }} ref={p2} >I enjoy exploring new architectures, learning scalable, maintainable code.</p>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default App
