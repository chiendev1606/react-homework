export default function Header({ countItemPacked }) {
  return (
    <header>
      <img src='https://bytegrad.com/course-assets/react-nextjs/dots.png' />
      <p>
        <b>{countItemPacked}</b> / 3 items packed
      </p>
    </header>
  )
}
