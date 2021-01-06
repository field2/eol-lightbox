<?php 
/**
 * Plugin Name: EOL Lightbox
 * Plugin URI: https://github.com/field2/eol_lightbox
 * Description: A simple lightbox and slider built specifically for the Gutenberg Gallery block
 * Author: Ben Dunkle
 * Version: 0.1
 * Author URI: https://bendunkle.com/
 */

// Define version.
if ( ! defined( '1' ) ) {
	define( '1', implode( get_file_data( __FILE__, array( 'Version' ), 'plugin' ) ) );
}

/**
 * Enqueue items.
 *
 * @since 0.1
 */

function eol_lightbox_activation() {
}
register_activation_hook(__FILE__, 'eol_lightbox_activation');

function eol_lightbox_deactivation() {
}
register_deactivation_hook(__FILE__, 'eol_lightbox_deactivation');




function eol_lightbox_scripts() {
		wp_enqueue_style( 'eol_lightbox_css', plugin_dir_url( __FILE__ ) . 'eol-lightbox.css', array(), 1 );

	wp_enqueue_script( 'eol_lightbox_js', plugin_dir_url( __FILE__ ) . 'eol-lightbox.js', array( 'jquery' ), 1, true );
}

add_action( 'wp_enqueue_scripts', 'eol_lightbox_scripts' );



