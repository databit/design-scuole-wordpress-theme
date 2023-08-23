<!-- Access Modal -->
<div class="modal fade" id="access-modal" tabindex="-1" role="dialog" aria-labelledby="accessModal" aria-hidden="false">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content perfect-scrollbar">
            <div class="modal-body">
                <form id="access-form" class="access-main-wrapper" name="loginform" id="loginform" action="<?php echo esc_url( site_url( 'wp-login.php', 'login_post' ) ); ?>" method="post">
                    <div class="container">
                        <div class="row variable-gutters mb-0 mb-lg-4 mb-xl-5">
                            <div class="col">
                                <h2 class="d-inline" id="accessModal"><?php _e("Accedi ai servizi", "design_scuole_italia"); ?>
                                    <button type="button" class="close dismiss" data-dismiss="modal" aria-label="Chiudi">
                                        <svg class="svg-cancel-large"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg-cancel-large"></use></svg>
                                    </button>
                                </h2>
                            </div>
                        </div>
                        <div class="row variable-gutters justify-content-center pt-4 pt-xl-5">
                            <div class="col-lg-4">
                                <p class="text-intro"><?php echo dsi_get_option("login_messaggio", "login"); ?></p>
                                <div class="access-buttons">
                                    <?php
                                    $link_esterni = dsi_get_option("link_esterni", "login");
                                    if(isset($link_esterni) && is_array($link_esterni) && count($link_esterni)>0) {
                                        foreach ($link_esterni as $item) {
                                            ?>
                                            <a class="btn btn-petrol btn-block btn-lg rounded mb-3"
                                               href="<?php echo $item["url_link"]; ?>"><?php echo $item["nome_link"]; ?></a>
                                            <?php
                                        }
                                    }
                                    ?>
                                </div>
                            </div>
                            <div class="col-lg-4 offset-lg-2 access-mobile-bg">
                                <div class="access-login">
                                    <h3><?php _e("Personale scolastico", "design_scuole_italia"); ?></h3>
                                    <p class="text-large"><?php _e("Entra nel sito della scuola con le tue credenziali per gestire contenuti, visualizzare circolari e altre funzionalità.", "design_scuole_italia"); ?></p>
                                    <div class="form-group my-0">
                                        <div class="wp_google_login">
                                            <div class="wp_google_login__button-container">
                                                <a class="wp_google_login__button text-dark" href="https://accounts.google.com/o/oauth2/auth?client_id=829455552241-9511cv357t1q4u639nqcdhs983b8qkc6.apps.googleusercontent.com&#038;redirect_uri=https%3A%2F%2Fwww.istitutonervialaimo.edu.it%2Fwp-login.php&#038;state=eyJub25jZSI6IjEzNTViMDNlYmEiLCJyZWRpcmVjdF90byI6Imh0dHBzOlwvXC93d3cuaXN0aXR1dG9uZXJ2aWFsYWltby5lZHUuaXRcL3dwLWFkbWluXC8iLCJwcm92aWRlciI6Imdvb2dsZSJ9&#038;scope=email+profile+openid&#038;access_type=online&#038;response_type=code">
                                                    <span class="wp_google_login__google-icon"></span>
                                                    Accedi con Google
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="access-login-form">
                                        <div class="form-group">
                                            <label for="login-email-field">Email address</label>
                                            <input type="text" name="log" id="login-email-field" class="input form-control" value="" size="20" autocapitalize="off" aria-describedby="access-form" placeholder="La tua email">
                                        </div>
                                        <div class="form-group mb-3">
                                            <label for="login-password-field">Password</label>
                                            <input type="password" name="pwd" id="login-password-field" class="form-control" value="" size="20" aria-describedby="access-form" placeholder="Password">
                                        </div>

                                        <div class="row variable-gutters mb-4">
                                            <div class="col text-right text-underline">
                                                <p><a href="<?php echo esc_url( wp_lostpassword_url() ); ?>" arial-label="<?php _e( 'Lost your password?' ); ?>"><?php _e( 'Lost your password?' ); ?></a></p>
                                            </div>
                                        </div>

                                        <div class="row variable-gutters">
                                            <div class="col-lg-6 mb-4">
                                                <div class="form-check form-check-inline">
                                                    <input name="rememberme" type="checkbox" id="rememberme" value="forever" />
                                                    <label for="rememberme"><?php esc_html_e( 'Remember Me' ); ?></label>
                                                </div>
                                            </div>
                                            <div class="col-lg-6 mb-4">
                                                <button type="submit" class="btn btn-white btn-block rounded" name="login" value="Accedi"><?php _e("Accedi", "design_scuole_italia"); ?></button>
                                            </div>
                                        </div>
                                        <!-- <div class="row variable-gutters">
                                            <div class="col text-center">
                                                <p>Non hai un account? <a href="#">Iscriviti</a></p>
                                            </div>
                                        </div> -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
<!-- End Access Modal -->
