<Form>
                                    <Grid
                                        spacing={2}
                                        container
                                        direction={'row'}
                                    >
                                        <Grid item xs={6}>
                                            <TextField
                                                id="standard-search"
                                                label="Name"
                                                name="fullName"
                                                type="text"
                                                variant="standard"
                                                fullWidth
                                                InputProps={{ style: { fontSize:26, color: '#021d25' } }}
                                                InputLabelProps={{ style: { fontSize: 26, color: '#021d25' } }}
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField
                                                id="standard-search"
                                                label="Email"
                                                type="email"
                                                name="email"
                                                variant="standard"
                                                fullWidth
                                                InputProps={{ style: { fontSize:26, color: '#021d25' } }}
                                                InputLabelProps={{ style: { fontSize: 26, color: '#021d25' } }}
                                                value={formik.values.email}
                                                onChange={formik.handleChange}
                                                error={
                                                    formik.touched.email && Boolean(formik.errors.email)
                                                }
                                                helperText={formik.touched.email && formik.errors.email}
                                            />
                                        </Grid>
                                        
                                    </Grid>
                                    
                                    <Box sx={{marginTop: '30px'}}>
                                        <TextField
                                            id="standard-multiline-static"
                                            label="Message"
                                            multiline
                                            name="message"
                                            rows={6}
                                            variant="standard"
                                            fullWidth
                                            InputProps={{ style: { fontSize:26, color: '#021d25' } }}
                                            InputLabelProps={{ style: { fontSize: 26, color: '#021d25' } }}
                                            value={formik.values.message}
                                            onChange={formik.handleChange}
                                            error={
                                            formik.touched.message &&
                                            Boolean(formik.errors.message)
                                            }
                                            helperText={
                                                formik.touched.message && formik.errors.message
                                            }
                                        />
                                    </Box>
                                    <Box 
                                        sx={{
                                            textAlign: "left"
                                        }}
                                    >
                                        <Button sx={{ marginTop: '20px'}} color="primary" endIcon={<SendIcon />} type="submit" variant="contained" size="large">
                                            Submit
                                        </Button>
                                    </Box>
                                </Form>