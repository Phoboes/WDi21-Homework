require 'test_helper'

class OceansControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get oceans_index_url
    assert_response :success
  end

  test "should get show" do
    get oceans_show_url
    assert_response :success
  end

  test "should get new" do
    get oceans_new_url
    assert_response :success
  end

  test "should get edit" do
    get oceans_edit_url
    assert_response :success
  end

end
