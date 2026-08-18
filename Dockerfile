FROM php:8.2-apache

# Enable Apache mod_rewrite (useful for PHP apps)
RUN a2enmod rewrite

# Set the document root to our app directory
ENV APACHE_DOCUMENT_ROOT=/var/www/html

# Copy the Ganpati invitation website into the container
COPY ganpati-invitation/ /var/www/html/

# Set proper permissions
RUN chown -R www-data:www-data /var/www/html \
    && chmod -R 755 /var/www/html

# Expose port 80
EXPOSE 80
