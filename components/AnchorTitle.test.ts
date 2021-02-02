import { getAnchorTitles } from "./PostSummary";

describe("App", () => {
  const text =
    '"p">{`picking a healthy job environment.`}</strong></p>\n' +
    '    <AnchorTitle id="job-environment" mdxType="AnchorTitle">Job Environment</AnchorTitle>\n' +
    "    <p>{`During my first job hunt as a dev I tried to get the job with the best learning environment.`}</p>" +
    '    <AnchorTitle id="test" mdxType="AnchorTitle"> Test </AnchorTitle>\n';

  it("return the right anchor", () => {
    const anchors = getAnchorTitles(text);
    expect(anchors).toEqual([
      { href: "job-environment", label: "Job Environment" },
      { href: "test", label: " Test " },
    ]);
  });
});
