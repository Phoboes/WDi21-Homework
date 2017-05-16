require 'test_helper'

class EngineersControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get engineers_index_url
    assert_response :success
  end

  test "should get show" do
    get engineers_show_url
    assert_response :success
  end

  test "should get new" do
    get engineers_new_url
    assert_response :success
  end

  test "should get edit" do
    get engineers_edit_url
    assert_response :success
  end

end
