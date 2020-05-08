/*
  tagging is optional, this example just shows an example of how you could use it
*/
const tagAnnotations = (annotations, tag) => {
  annotations.forEach((annotation) => {
    annotation.tags = [tag]
  })
  return annotations
}

const surgeries = [
  { time: '2018-06-01', title: 'Surgery A' },
  { time: '2020-02-10', title: 'Surgery B' },
]

const medicines = [
  { time: '2018-08-01', timeEnd: '2018-09-01', title: 'Medicine X', text: 'Prescribed by doctor Anna' },
  { time: '2019-10-10', timeEnd: '2020-03-20', title: 'Medicine Y', text: 'Taking 10mg a day' },
]

const annotations = [
  ...tagAnnotations(surgeries, 'surgeries'),
  ...tagAnnotations(medicines, 'medicines'),
]

export default annotations
