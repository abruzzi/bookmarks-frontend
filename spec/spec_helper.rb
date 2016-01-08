require 'capybara'
require 'capybara/rspec'
require 'capybara/poltergeist'
require 'site_prism'

Capybara.configure do |config|
  config.run_server = false
  config.current_driver = :poltergeist
  config.default_wait_time = 10
  config.app_host = 'http://localhost:8100/'
end

SitePrism.configure do |config|
  config.use_implicit_waits = true
end

require 'pages/feed_list_page'

RSpec.configure do |config|
  config.expect_with :rspec do |expectations|
    expectations.include_chain_clauses_in_custom_matcher_descriptions = true
  end

  config.mock_with :rspec do |mocks|
    mocks.verify_partial_doubles = true
  end

end
