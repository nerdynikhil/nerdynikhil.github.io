const rows: [string, string, string, string][] = [
  ['Shows what takes up space', 'Yes, by meaning or by folder', 'One “junk” total', 'Yes, by folder'],
  ['Explains each item', 'In plain words, with its reasoning', 'Rarely', 'No, you read the paths'],
  ['What it costs to get back', 'Four verdicts, with rebuild time or download size', 'Safe or not safe', 'Not covered'],
  ['Knows your kind of work', 'Video, photo, audio, 3D, design, code, AI and everyday', 'General caches and logs', 'No'],
  ['Groups files by project', 'Yes, with archive to drive', 'No', 'No'],
  ['How things get removed', 'You review a tray; Trash with undo', 'One big button', 'You delete by hand in Finder'],
  ['Price', '$24 once, free tier', 'Often a subscription', 'Often free or low one-time'],
]

export function Compare() {
  return (
    <section className="section" id="compare" aria-labelledby="compare-title">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">How it compares</span>
          <h2 id="compare-title">Between a cleaner and a map.</h2>
          <p>
            Cleaners decide for you. Visualizers show you shapes and leave the deciding to you. Sector9
            explains, and then lets you decide.
          </p>
        </div>
        <div className="table-wrap" role="region" aria-labelledby="compare-title" tabIndex={0}>
          <table className="compare">
            <caption className="visually-hidden">Sector9 compared with a typical cleaner and a typical disk visualizer</caption>
            <thead>
              <tr>
                <td />
                <th scope="col" className="us">Sector9</th>
                <th scope="col">Typical cleaner</th>
                <th scope="col">Typical disk visualizer</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([label, us, cleaner, viz]) => (
                <tr key={label}>
                  <th scope="row">{label}</th>
                  <td className="us">{us}</td>
                  <td>{cleaner}</td>
                  <td>{viz}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
