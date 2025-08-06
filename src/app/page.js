export default function Home() {
  return (
    <>
      <header className="header">
        <div className="container">
          <h1>Outone</h1>
          <p className="subtitle"></p>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <p>You know the destination.
All you need is the compass.
</p>
        </div>
      </section>

      <section className="manifesto">
        <div className="container">
          <div className="principle">
            <h3>1. Simplicity</h3>
            <p>You are complicated.
You use ten words when you can use one.
You use one word when you can show an image.</p>
          </div>

          <div className="principle">
            <h3>2. Give back to others</h3>
            <p>How can you share you software with others if you never actually use it yourself? Software should be used by those who make it</p>
          </div>

          <div className="principle">
            <h3>3. Just take a picture</h3>
            <p>When preparing to sell my laptop, I was busy taking out the ladder for a perfect top down picture. Thats when someone saw me and said <span className="highlight">&quot;Leave the ladder, close the door and just take a picture&quot;</span>. Don&apos;t go off course on your journey towards your destination. Software should know what it stands for.</p>
          </div>

          <div className="principle">
            <h3>4. Messy Desk</h3>
            <p>Creativity comes from messy, in the box thinking comes from tidy.
Tidy makes us care more about others, messy makes us care more about our craft.
Messy break rules, tidy sticks to rules.
Tidy and messy are life.
It goes everywhere we do.</p>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>Love does not come from money, life does not come from money.</p>
        </div>
      </footer>
    </>
  )
}
