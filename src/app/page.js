export default function Home() {
  return (
    <>
      <header className="header">
        <div className="container">
          <h1>The Software Manifesto</h1>
          <p className="subtitle">Understanding what truly matters in software design</p>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <h2>Software should be your compass, not your burden</h2>
          <p>Like a car that helps you navigate to your destination, software should provide the tools to reach your goals—nothing more, nothing less.</p>
        </div>
      </section>

      <section className="manifesto">
        <div className="container">
          <div className="principle">
            <h3>Simple is understanding what is essential</h3>
            <p>There&apos;s an old quote: &quot;If you can&apos;t explain something simply, you don&apos;t understand it well enough.&quot; Simple is understanding what is essential. Complex is not understanding enough to keep it simple.</p>
            <p>A simple life doesn&apos;t come from owning few things—it comes from understanding which are the right few necessary things. We can live much simpler lives if we ask ourselves the most important question: <span className="highlight">What do we truly want?</span></p>
          </div>

          <div className="principle">
            <h3>Focus comes from being specific</h3>
            <p>You can try to sell to a whole country, but not everybody in that country wants what you have. Instead of focusing on everyone and reaching no one, focus is concentrated attention on what matters.</p>
            <p>If your target is young adults and seniors, then ideally you would want people from every type of customer in your organization. They can use the software you provide and make a better experience for people inside and outside—more importantly, outside.</p>
          </div>

          <div className="principle">
            <h3>Don&apos;t think, shoot</h3>
            <p>When you think too much about what you&apos;re trying to do, you&apos;re not taking action. When you&apos;re too busy setting up perfect lighting and cameras for the perfect picture, you&apos;re focusing too much on something that won&apos;t get you where you want to go.</p>
            <p>If you can make a better creation, do it. If you cannot, just take the picture and make it as nice as you can. Don&apos;t think too much—if thinking takes up so much time that you&apos;re not actually doing, that&apos;s a waste of time.</p>
            <p>I experienced this when I was trying to get the perfect picture of a laptop I was selling. I was setting up a ladder to take the perfect top-down shot when my mom, about to go to her room, saw me and said &quot;put it back, close the door, and just take a picture.&quot; In that moment, I understood the concept of noise versus signal.</p>
          </div>

          <div className="principle">
            <h3>Signal vs. Noise</h3>
            <p>There&apos;s always space between channels—that&apos;s the noise, the static. When you find the right signal, you hear the news, the music station. It&apos;s the same with goals.</p>
            <p>Why would you spend three months building the perfect website (noise) when you could send an email to twenty people in one day and get those users, then build the website when the problem is actually a problem? Go after the signal.</p>
          </div>

          <div className="quote">
            &quot;Software should never clutter the desk of the user. Software should BE the desk of the user, and the user can clutter it or keep it empty.&quot;
          </div>

          <div className="principle">
            <h3>Your subconscious knows better</h3>
            <p>A game designer lost his entire script and had one weekend to rewrite it. The second draft, written in one weekend, was magnificently better than the first. Why? His subconscious mind had been processing the story, incorporating new experiences and ideas.</p>
            <p>The subconscious mind can hold incredible amounts of information and solve vastly complex problems that the conscious mind cannot fathom. Software should be like the subconscious mind—making your creations better without you specifically knowing how.</p>
          </div>

          <div className="principle">
            <h3>Software should make your creations better</h3>
            <p>Software should be the subconscious mind that makes your story, game design, philosophy, or any creation better than you could make it alone. It should understand what you want and give you the tools to navigate to your destination.</p>
            <p>Just like choosing a health insurance plan—if I&apos;m picking it for you, I should get the same plan. Software should eat its own dog food and make the experience better for everyone.</p>
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