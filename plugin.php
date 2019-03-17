<?php

/*
Plugin Name: WebPress
Description: A lightweight react-ready WordPress plugin
Author: WebPress
Version: 1.0.0
*/

add_action( 'wp_enqueue_scripts', function () {
	wp_enqueue_script(
		'my-script',
		untrailingslashit( plugin_dir_url( __FILE__ ) ) . '/dist/js/main.js',
		array( 'wp-api' ),
		false,
		true
	);
} );

add_filter( 'the_content', function( $content ) {
	$content .= '<div id="root"></div>';
	return $content;
} );