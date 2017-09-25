const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export default (async function asyncLogin(values /*, dispatch */) {
  await sleep(1000); // simulate server latency
  if (['foo@foo.com', 'bar@bar.com'].includes(values.email)) {
    throw { email: 'Email already Exists' };
  }
});
