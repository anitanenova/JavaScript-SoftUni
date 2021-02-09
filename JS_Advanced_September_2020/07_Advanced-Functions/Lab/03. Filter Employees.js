function filterEmployees(data, criteria) {
  data = JSON.parse(data);
  let [criteriaName, criteriaValue] = criteria.split("-");

  data
    .filter((x) => x[criteriaName] == criteriaValue)
    .forEach((x, i) => {
      console.log(`${i}. ${x.first_name} ${x.last_name} - ${x.email}`);
    });
}
