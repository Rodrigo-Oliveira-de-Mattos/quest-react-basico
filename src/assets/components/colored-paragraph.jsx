const ParagraphColored = ({ paragraph, color, textTransform }) => {
    return(
      <>
        <p style={{ color, textTransform }}>{paragraph}</p>
        <p style={{ color, textTransform }}>{paragraph}</p>
        <p style={{ color, textTransform }}>{paragraph}</p>
        <p style={{ color, textTransform }}>{paragraph}</p>
      </>
    )
};

export default ParagraphColored