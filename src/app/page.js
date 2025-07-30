export default function Home() {
  return (
    <>
      <header className="header">
        <div className="container">
          <h1>Break Out One</h1>
          <p className="subtitle"></p>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <p>You already know your destination. You need the tools to navigate to it. Software should give you those tools to get to your destination.</p>
        </div>
      </section>

      <section className="manifesto">
        <div className="container">
          <div className="principle">
            <h3>1. What do you want?</h3>
            <div className="quote">
              &quot;Simple means understanding&quot;
            </div>
            <p>So I&apos;m reminded of a quote: &quot;A simple life does not come from owning few things, it comes from understanding what are the right few necessary things. We should stop and ask ourselves the most secret and precious question. The question of what we truly want.&quot; Software should understand what it&apos;s users want.</p>
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
            <p>When you have everything out in front of you it is easier to connect between concepts and ideas. Software should be the desk of the user.</p>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <p></p>
        </div>
      </footer>
    </>
  )
}
