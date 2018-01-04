<div className={classes.profile}>
    <Avatar
        alt='Long Nguyen'
        src='https://cdn-images-1.medium.com/fit/c/100/100/0*bh4kZqN3bPPuk15J.jpg'
        className={classes.avatar}
    />
    <div className={classes.hero}>
        <Typography type='headline' gutterBottom>Long Nguyen</Typography>
        <Typography type='subheading' gutterBottom>University of Foreign Language Studies</Typography>
    </div>
</div>


export default withStyles(styles)(Profile)