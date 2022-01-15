export const sortByDate = (a, b) => { 
  return new Date(b.frontmatter.date).toLocaleDateString('tr-TR') - new Date(a.frontmatter.date).toLocaleDateString('tr-TR');
}